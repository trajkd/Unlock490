#!/usr/bin/env python
# -*- coding: utf-8 -*- 

import os

import webapp3
import jinja2

# from google.appengine.ext import ndb

# class Settings(ndb.Model):
#   name = ndb.StringProperty()
#   value = ndb.StringProperty()

#   @staticmethod
#   def get(name):
#     NOT_SET_VALUE = "NOT SET"
#     retval = Settings.query(Settings.name == name).get()
#     if not retval:
#       retval = Settings()
#       retval.name = name
#       retval.value = NOT_SET_VALUE
#       retval.put()
#     if retval.value == NOT_SET_VALUE:
#       raise Exception(('Setting %s not found in the database. A placeholder ' +
#         'record has been created. Go to the Developers Console for your app ' +
#         'in App Engine, look up the Settings record with name=%s and enter ' +
#         'its value in that record\'s value field.') % (name, name))
#     return retval.value

# AWS_ACCESS_KEY_ID = Settings.get('AWSAccessKeyId')
# AWS_SECRET_ACCESS_KEY = Settings.get('AWSSecretAccessKey')

# import boto3

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

cred = credentials.ApplicationDefault()
# cred = credentials.Certificate("./unlock490firebase-firebase-adminsdk-68d2x-c3d8e0d547.json")
firebase_admin.initialize_app(cred, {
  "projectId": "unlock490firebase",
})

db = firestore.client()

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape=True)

import re
def valid_username(username):
        USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")
        return username and USER_RE.match(username)

def valid_password(password):
        PASS_RE = re.compile(r"^.{8,50}$")
        return password and PASS_RE.match(password) and ("A" in password or "B" in password or "C" in password or "D" in password or "E" in password or "F" in password or "G" in password or "H" in password or "I" in password or "J" in password or "K" in password or "L" in password or "M" in password or "N" in password or "O" in password or "P" in password or "Q" in password or "R" in password or "S" in password or "T" in password or "U" in password or "V" in password or "W" in password or "X" in password or "Y" in password or "Z" in password) and ("1" in password or "2" in password or "3" in password or "4" in password or "5" in password or "6" in password or "7" in password or "8" in password or "9" in password or "0" in password)

def valid_email(email):
        EMAIL_RE = re.compile(r"^[\S]+@[\S]+.[\S]+$")
        return not email or EMAIL_RE.match(email)

import random
import string
import hashlib

def get_random_string(N):
    result_str = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(N))
    return result_str

def make_salt():
    return ''.join(random.choice(string.ascii_letters) for x in range(5))

def make_pw_hash(name, pw, salt = None):
    if not salt:
        salt = make_salt()
    h = hashlib.sha256(name.encode('utf-8') + pw.encode('utf-8') + salt.encode('utf-8')).hexdigest()
    return '%s,%s' % (h, salt)

def valid_pw(name, pw, h):
    ###Your code here
    if make_pw_hash(name, pw, h.split(",")[1]) == h:
        return True

from pywebpush import webpush, WebPushException
from datetime import timezone
import datetime
import time
import math
  
dt = datetime.datetime.now()
utc_time = dt.replace(tzinfo = timezone.utc) 
utc_timestamp = utc_time.timestamp()
 
VAPID_PRIVATE_KEY = open("private_key.txt", "r").readline().strip("\n")
VAPID_PUBLIC_KEY = open("public_key.txt", "r").read().strip("\n")

def push_notification(endpoint, p256dh, auth):
    VAPID_CLAIMS = {
        "aud": '/'.join((endpoint.split('/'))[:3]),  
        "exp": math.floor(utc_timestamp / 1000) + (12 * 60 * 60),
        "sub": "mailto:hello@unlock490.com"
    }
    webpush(
        subscription_info={"endpoint": endpoint, "keys": {"p256dh": p256dh, "auth": auth}},
        data=json.dumps({
            "notification": {
            "title": "Hai 1 terapia da ritirare oggi",
            "body": "Recati al centro ospedaliero entro le xx:xx per ritirarla",
            "icon": 'images/900x900.svg',
            "vibrate": [100, 50, 100],
            "data": { "primaryKey": 1 },
            "actions": [
                {"action": "explore", "title": "Apri pagina di ritiro", "icon": "static/img/boxwithpin.svg"},
                {"action": "close", "title": "Ignora", "icon": "static/img/close.svg"},
            ]
        }}),
        vapid_private_key=VAPID_PRIVATE_KEY,
        vapid_claims=VAPID_CLAIMS
    )

from apscheduler.schedulers.background import BackgroundScheduler
scheduler = BackgroundScheduler()
all_users_ref = db.collection('users').stream()
for user in all_users_ref:
    user_dict = user.to_dict()
    if 'endpoint' in user_dict and 'p256dh' in user_dict and 'auth' in user_dict:
        subscription_info_dict = db.collection('users').document(user.id).get({'endpoint', 'p256dh', 'auth'}).to_dict()
        scheduler.add_job(push_notification, 'interval', args=[subscription_info_dict['endpoint'], subscription_info_dict['p256dh'], subscription_info_dict['auth']], seconds=5)
scheduler.start()

class MainPage(webapp3.RequestHandler):
        def get(self):
            self.response.out.write(jinja_env.get_template('base.html').render())

class SignupHandler(webapp3.RequestHandler):
        def write_form(self, username="", email="", username_error="", password_error="", verify_error="", email_error=""):
                self.response.out.write(jinja_env.get_template('signup.html').render())
                # self.response.out.write(signupform%{"username": username,
                #                                                                                 "email": email,
                #                                                                                 "username_error": username_error,
                #                                                                                 "password_error": password_error,
                #                                                                                 "verify_error": verify_error,
                #                                                                                 "email_error": email_error})
        def get(self):
                self.write_form()
        def post(self, username_error="", password_error="", verify_error=""):
                username = self.request.get("username")
                password = self.request.get("password")
                verify = self.request.get("verify")
                if (valid_username(username) and valid_password(password) and password == verify):
                        #if len(db.Query(User).filter("username =", username).fetch(limit=1))==0:
                        if db.collection('users') and (not db.collection('users').document(username).get().exists or len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) != 2):
                                password = make_pw_hash(username, password)
                                #u = User(username=username, password=password, email=email)
                                #u.put()
                                doc_ref = db.collection('users').document(username)
                                doc_ref.set({
                                    'password': password,
                                    'signup_date': firestore.SERVER_TIMESTAMP
                                })
                                self.response.headers.add_header('Content-Type', 'application/json')
                                result = {
                                    'message': 'Informazioni di primo accesso raccolte con successo.'
                                  }
                                self.response.write(json.dumps(result))
                                return
                        else:
                                username_error = "Lo username inserito è già registrato."
                if not valid_username(username):
                        username_error = "Hai inserito un username non valido."
                if not valid_password(password):
                        password_error = "Hai inserito una password non valida."
                if not password == verify:
                        verify_error = "Le password non coincidono."
                self.response.write("<ul style='list-style-type:none;padding:0;'><li>"+username_error+"</li><li>"+password_error+"</li><li>"+verify_error+"</li></ul>")
                self.response.set_status(400, "<ul style='list-style-type:none;padding:0;'><li>"+username_error+"</li><li>"+password_error+"</li><li>"+verify_error+"</li></ul>")

import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests
class EmailPhoneSignupHandler(webapp3.RequestHandler):
        def write_form(self, username="", email="", username_error="", password_error="", verify_error="", email_error=""):
                self.response.out.write(jinja_env.get_template('emailphonesignup.html').render())
                # self.response.out.write(signupform%{"username": username,
                #                                                                                 "email": email,
                #                                                                                 "username_error": username_error,
                #                                                                                 "password_error": password_error,
                #                                                                                 "verify_error": verify_error,
                #                                                                                 "email_error": email_error})
        def get(self):
                self.write_form()
        def post(self):

            email_verification_code = get_random_string(6)

            sender_email = "unlock490app@gmail.com"
            receiver_email = self.request.get("email")
            f = open("emailpassword.txt", "r")
            email_password = f.read()

            message = MIMEMultipart("alternative")
            message["Subject"] = "Codice di verifica"
            message["From"] = sender_email
            message["To"] = receiver_email

            # Create the plain-text and HTML version of your message
            text = """\
            L'indirizzo email """+receiver_email+""" è stato scelto per venire registrato sull'applicazione di UNLOCK 4/90.
            Per confermare il tuo indirizzo email, usa il seguente codice:
            """+email_verification_code+"""
            Se non sei stato tu a richiedere la registrazione su UNLOCK 4/90, ti preghiamo di ignorare questa comunicazione."""
            html = """\
            <div style="overflow: hidden;">
                <font size="-1">
                    <u></u>
                    <div marginwidth="0" marginheight="0" style="padding:0">
                        <div id="m_-2024486289125691792wrapper" dir="ltr" style="background-color:#ffffff;margin:0;padding:70px 0;width:100%">
                            <font color="#888888">
                            </font>
                            <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center" valign="top">
                                            <div id="m_-2024486289125691792template_header_image">
                                                <p style="margin-top:0">
                                                    <img src="https://unlock490firebase.ew.r.appspot.com/static/img/logo.png" alt="UNLOCK 4/90" style="border:none;display:inline-block;font-size:14px;font-weight:bold;height:auto;outline:none;text-decoration:none;text-transform:capitalize;vertical-align:middle;max-width:100%;margin-left:0;margin-right:0">
                                                </p>
                                            </div>
                                            <font color="#888888">
                                            </font>
                                            <font color="#888888">
                                            </font>
                                            <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_-2024486289125691792template_container" style="background-color:#f7f7f7;border:1px solid #e5e5e5;border-radius:3px">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" valign="top">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" id="m_-2024486289125691792template_header" style="background-color:#0048af;color:#ffffff;border-bottom:0;font-weight:bold;line-height:100%;vertical-align:middle;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;border-radius:3px 3px 0 0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td id="m_-2024486289125691792header_wrapper" style="padding:36px 48px;display:block">
                                                                            <h1 style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:30px;font-weight:300;line-height:150%;margin:0;text-align:left;color:#ffffff">Verifica email per UNLOCK 4/90</h1>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" valign="top">
                                                            <font color="#888888">
                                                            </font>
                                                            <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_-2024486289125691792template_body">
                                                                <tbody>
                                                                    <tr>
                                                                        <td valign="top" id="m_-2024486289125691792body_content" style="background-color:#f7f7f7">
                                                                            <font color="#888888">
                                                                            </font>
                                                                            <table border="0" cellpadding="20" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td valign="top" style="padding:48px 48px 32px">
                                                                                            <div id="m_-2024486289125691792body_content_inner" style="color:#636363;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:14px;line-height:150%;text-align:left">
                                                                                                <p style="margin:0 0 16px">L'indirizzo email """+receiver_email+""" è stato scelto per venire registrato sull'applicazione di UNLOCK 4/90.</p>
                                                                                                <p style="margin:0 0 16px">Per confermare il tuo indirizzo email, usa il seguente codice:</p>
                                                                                                <h1 style="margin:0 0 16px; font-weight: 900">"""+email_verification_code+"""</h1>
                                                                                                <p style="margin:0 0 16px">Se non sei stato tu a richiedere la registrazione su UNLOCK 4/90, ti preghiamo di ignorare questa comunicazione.</p>
                                                                                                <font color="#888888">
                                                                                                </font>
                                                                                            </div>
                                                                                            <font color="#888888">
                                                                                            </font>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <font color="#888888">
                                                                            </font>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <font color="#888888">
                                                            </font>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <font color="#888888">
                                            </font>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" valign="top">
                                            <table border="0" cellpadding="10" cellspacing="0" width="600" id="m_-2024486289125691792template_footer">
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style="padding:0;border-radius:6px">
                                                            <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td colspan="2" valign="middle" id="m_-2024486289125691792credit" style="border-radius:6px;border:0;color:#8a8a8a;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:12px;line-height:150%;text-align:center;padding:24px 0">
                                                                            <p style="margin:0 0 16px">UNLOCK 4/90</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </font>
            </div>
            """

            # Turn these into plain/html MIMEText objects
            part1 = MIMEText(text, "plain")
            part2 = MIMEText(html, "html")

            # Add HTML/plain-text parts to MIMEMultipart message
            # The email client will try to render the last part first
            message.attach(part1)
            message.attach(part2)

            # Create secure connection with server and send email
            context = ssl.create_default_context()
            with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
                server.login(sender_email, email_password)
                server.sendmail(
                    sender_email, receiver_email, message.as_string()
                )

            phone = self.request.get("phoneNumber")
            sms_verification_code = get_random_string(6)
            doc_ref = db.collection('users').document(self.request.get("username"))
            doc_ref.set({
                'email_verification_code': email_verification_code,
                'sms_verification_code': sms_verification_code
            }, merge=True)
            f = open("semysmskey.txt", "r")
            url = 'https://semysms.net/api/3/sms.php?token='+f.read()+'&device=249444&phone=%2B39'+phone+'&msg=%5BUNLOCK%204%2F90%5D%20Inserisci%20il%20codice%20'+sms_verification_code+'%20per%20proseguire%20la%20registrazione.'
            response = requests.get(url)
            if response.status_code == 200:
                self.response.headers.add_header('Content-Type', 'application/json')
                result = {
                    'email': receiver_email,
                    'phone': phone,
                    'message': 'SMS di verifica inviato.'
                  }
                self.response.write(json.dumps(result))
                return
            else:
                self.response.write("È stato riscontrato un errore durante l'invio dell'SMS di verifica.")
                self.response.set_status(response.status_code, "È stato riscontrato un errore durante l'invio dell'SMS di verifica.")
                

class VerifyEmailHandler(webapp3.RequestHandler):
        def write_form(self, username="", email="", username_error="", password_error="", verify_error="", email_error=""):
                self.response.out.write(jinja_env.get_template('verifyemail.html').render())
                # self.response.out.write(signupform%{"username": username,
                #                                                                                 "email": email,
                #                                                                                 "username_error": username_error,
                #                                                                                 "password_error": password_error,
                #                                                                                 "verify_error": verify_error,
                #                                                                                 "email_error": email_error})
        def get(self):
                self.write_form()
        def post(self):
            if self.request.get("email_code_input") == (db.collection('users').document(self.request.get("username")).get({'email_verification_code'}).to_dict())['email_verification_code']:
                doc_ref = db.collection('users').document(self.request.get("username"))
                doc_ref.set({
                    'email': self.request.get("email")
                }, merge=True)
                self.response.headers.add_header('Content-Type', 'application/json')
                result = {
                    'message': 'Email verificata e registrata con successo.'
                  }
                self.response.write(json.dumps(result))
                return
            else:
                self.response.write("È stato inserito un codice errato per la verifica dell'email.")
                self.response.set_status(400, "È stato inserito un codice errato per la verifica dell'email.")

class VerifyPhoneHandler(webapp3.RequestHandler):
        def write_form(self, username="", email="", username_error="", password_error="", verify_error="", email_error=""):
                self.response.out.write(jinja_env.get_template('verifyphone.html').render())
                # self.response.out.write(signupform%{"username": username,
                #                                                                                 "email": email,
                #                                                                                 "username_error": username_error,
                #                                                                                 "password_error": password_error,
                #                                                                                 "verify_error": verify_error,
                #                                                                                 "email_error": email_error})
        def get(self):
                self.write_form()
        def post(self):
            if self.request.get("sms_code_input") == (db.collection('users').document(self.request.get("username")).get({'sms_verification_code'}).to_dict())['sms_verification_code']:
                doc_ref = db.collection('users').document(self.request.get("username"))
                doc_ref.set({
                    'phone': self.request.get("phone")
                }, merge=True)
                self.response.headers.add_header('Content-Type', 'application/json')
                result = {
                    'message': 'Numero di cellulare verificato e registrato con successo.'
                  }
                self.response.write(json.dumps(result))
                return
            else:
                self.response.write("È stato inserito un codice errato per la verifica del numero di cellulare.")
                self.response.set_status(400, "È stato inserito un codice errato per la verifica del numero di cellulare.")

class TutorialHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('tutorial.html').render())

class SuccessHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('success.html').render())

class NewPasswordHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('newpassword.html').render())
    def post(self, cf_error="", phone_error=""):
            username = self.request.get("username")
            cf = self.request.get("cf")
            phone = self.request.get("phone")
            if username == "":
                self.response.write("Inserisci lo username.")
                self.response.set_status(400, "Inserisci lo username.")
            else:
                if db.collection('users'):
                    if db.collection('users').document(username).get().exists:
                        if len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) == 2:
                            if cf == "PIGMFW91M48F428O" and phone == db.collection('users').document(username).get({'phone'}).to_dict()['phone']:
                                
                                email_verification_code = get_random_string(6)

                                sender_email = "unlock490app@gmail.com"
                                receiver_email = db.collection('users').document(username).get({'email'}).to_dict()['email']
                                f = open("emailpassword.txt", "r")
                                email_password = f.read()

                                message = MIMEMultipart("alternative")
                                message["Subject"] = "Codice di verifica"
                                message["From"] = sender_email
                                message["To"] = receiver_email

                                # Create the plain-text and HTML version of your message
                                text = """\
                                L'account con username """+username+""" registrato con questo indirizzo email sull'applicazione di UNLOCK 4/90 ha richiesto la reimpostazione della password.
                                Per confermare la richiesta, usa il seguente codice:
                                """+email_verification_code+"""
                                Se non sei stato tu a richiedere la reimpostazione della password per l'accesso a UNLOCK 4/90, ti preghiamo di ignorare questa comunicazione."""
                                html = """\
                                <div style="overflow: hidden;">
                                    <font size="-1">
                                        <u></u>
                                        <div marginwidth="0" marginheight="0" style="padding:0">
                                            <div id="m_-2024486289125691792wrapper" dir="ltr" style="background-color:#ffffff;margin:0;padding:70px 0;width:100%">
                                                <font color="#888888">
                                                </font>
                                                <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" valign="top">
                                                                <div id="m_-2024486289125691792template_header_image">
                                                                    <p style="margin-top:0">
                                                                        <img src="https://unlock490firebase.ew.r.appspot.com/static/img/logo.png" alt="UNLOCK 4/90" style="border:none;display:inline-block;font-size:14px;font-weight:bold;height:auto;outline:none;text-decoration:none;text-transform:capitalize;vertical-align:middle;max-width:100%;margin-left:0;margin-right:0">
                                                                    </p>
                                                                </div>
                                                                <font color="#888888">
                                                                </font>
                                                                <font color="#888888">
                                                                </font>
                                                                <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_-2024486289125691792template_container" style="background-color:#f7f7f7;border:1px solid #e5e5e5;border-radius:3px">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" valign="top">
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" id="m_-2024486289125691792template_header" style="background-color:#0048af;color:#ffffff;border-bottom:0;font-weight:bold;line-height:100%;vertical-align:middle;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;border-radius:3px 3px 0 0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td id="m_-2024486289125691792header_wrapper" style="padding:36px 48px;display:block">
                                                                                                <h1 style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:30px;font-weight:300;line-height:150%;margin:0;text-align:left;color:#ffffff">Verifica email per UNLOCK 4/90</h1>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" valign="top">
                                                                                <font color="#888888">
                                                                                </font>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_-2024486289125691792template_body">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td valign="top" id="m_-2024486289125691792body_content" style="background-color:#f7f7f7">
                                                                                                <font color="#888888">
                                                                                                </font>
                                                                                                <table border="0" cellpadding="20" cellspacing="0" width="100%">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td valign="top" style="padding:48px 48px 32px">
                                                                                                                <div id="m_-2024486289125691792body_content_inner" style="color:#636363;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:14px;line-height:150%;text-align:left">
                                                                                                                    <p style="margin:0 0 16px">L'account con username """+username+""" registrato con questo indirizzo email sull'applicazione di UNLOCK 4/90 ha richiesto la reimpostazione della password.</p>
                                                                                                                    <p style="margin:0 0 16px">Per confermare la richiesta, usa il seguente codice:</p>
                                                                                                                    <h1 style="margin:0 0 16px; font-weight: 900">"""+email_verification_code+"""</h1>
                                                                                                                    <p style="margin:0 0 16px">Se non sei stato tu a richiedere la reimpostazione della password per l'accesso a UNLOCK 4/90, ti preghiamo di ignorare questa comunicazione.</p>
                                                                                                                    <font color="#888888">
                                                                                                                    </font>
                                                                                                                </div>
                                                                                                                <font color="#888888">
                                                                                                                </font>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <font color="#888888">
                                                                                                </font>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <font color="#888888">
                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <font color="#888888">
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" valign="top">
                                                                <table border="0" cellpadding="10" cellspacing="0" width="600" id="m_-2024486289125691792template_footer">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="top" style="padding:0;border-radius:6px">
                                                                                <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td colspan="2" valign="middle" id="m_-2024486289125691792credit" style="border-radius:6px;border:0;color:#8a8a8a;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:12px;line-height:150%;text-align:center;padding:24px 0">
                                                                                                <p style="margin:0 0 16px">UNLOCK 4/90</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </font>
                                </div>
                                """

                                # Turn these into plain/html MIMEText objects
                                part1 = MIMEText(text, "plain")
                                part2 = MIMEText(html, "html")

                                # Add HTML/plain-text parts to MIMEMultipart message
                                # The email client will try to render the last part first
                                message.attach(part1)
                                message.attach(part2)

                                # Create secure connection with server and send email
                                context = ssl.create_default_context()
                                with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
                                    server.login(sender_email, email_password)
                                    server.sendmail(
                                        sender_email, receiver_email, message.as_string()
                                    )

                                sms_verification_code = get_random_string(6)
                                doc_ref = db.collection('users').document(self.request.get("username"))
                                doc_ref.set({
                                    'email_verification_code': email_verification_code,
                                    'sms_verification_code': sms_verification_code
                                }, merge=True)
                                f = open("semysmskey.txt", "r")
                                url = 'https://semysms.net/api/3/sms.php?token='+f.read()+'&device=249444&phone=%2B39'+phone+'&msg=%5BUNLOCK%204%2F90%5D%20Inserisci%20il%20codice%20'+sms_verification_code+'%20per%20proseguire%20con%20la%20reimpostazione%20della%20password.'
                                response = requests.get(url)
                                if response.status_code == 200:
                                    self.response.headers.add_header('Content-Type', 'application/json')
                                    result = {
                                        'email': db.collection('users').document(username).get({'email'}).to_dict()['email'],
                                        'message': 'Processo di reimpostazione password avviato.'
                                    }
                                    self.response.write(json.dumps(result))
                                    return
                                else:
                                    self.response.write("È stato riscontrato un errore durante l'invio dell'SMS di verifica.")
                                    self.response.set_status(response.status_code, "È stato riscontrato un errore durante l'invio dell'SMS di verifica.")
                            else:
                                if not cf == "PIGMFW91M48F428O":
                                        cf_error = "Il codice fiscale per questo username è sbagliato."
                                if not phone == db.collection('users').document(username).get({'phone'}).to_dict()['phone']:
                                        phone_error = "Il numero di cellulare per questo username è sbagliato."
                                self.response.write("<ul style='list-style-type:none;padding:0;'><li>"+cf_error+"</li><li>"+phone_error+"</li></ul>")
                                self.response.set_status(400, "<ul style='list-style-type:none;padding:0;'><li>"+cf_error+"</li><li>"+phone_error+"</li></ul>")
                        else:
                            self.response.write("La registrazione non è ancora stata completata.")
                            self.response.set_status(400, "La registrazione non è ancora stata completata.")
                    else:
                        self.response.write("Lo username inserito non esiste.")
                        self.response.set_status(400, "Lo username inserito non esiste.")
                else:
                    self.response.write("Lo username inserito non esiste.")
                    self.response.set_status(400, "Lo username inserito non esiste.")

class VerifyEmailForRecoveryHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('verifyemailforrecovery.html').render())
    def post(self):
        if self.request.get("email_code_input") == (db.collection('users').document(self.request.get("username")).get({'email_verification_code'}).to_dict())['email_verification_code']:
            doc_ref = db.collection('users').document(self.request.get("username"))
            doc_ref.set({
                'email_verified': 1
            }, merge=True)
            self.response.headers.add_header('Content-Type', 'application/json')
            result = {
                'message': 'Email verificata con successo.'
              }
            self.response.write(json.dumps(result))
            return
        else:
            self.response.write("È stato inserito un codice errato per la verifica dell'email.")
            self.response.set_status(400, "È stato inserito un codice errato per la verifica dell'email.")

class VerifyPhoneForRecoveryHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('verifyphoneforrecovery.html').render())
    def post(self):
        if self.request.get("sms_code_input") == (db.collection('users').document(self.request.get("username")).get({'sms_verification_code'}).to_dict())['sms_verification_code']:
            doc_ref = db.collection('users').document(self.request.get("username"))
            doc_ref.set({
                'phone_verified': 1
            }, merge=True)
            self.response.headers.add_header('Content-Type', 'application/json')
            result = {
                'message': 'Numero di cellulare verificato con successo.'
              }
            self.response.write(json.dumps(result))
            return
        else:
            self.response.write("È stato inserito un codice errato per la verifica del numero di cellulare.")
            self.response.set_status(400, "È stato inserito un codice errato per la verifica del numero di cellulare.")

class ChooseNewPasswordHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('choosenewpassword.html').render())
    def post(self, password_error="", verify_error=""):
            username = self.request.get("username")
            password = self.request.get("password")
            verify = self.request.get("verify")
            oldpassword = self.request.get("oldpassword")
            if oldpassword == "":
                if db.collection('users').document(username).get({'email_verified'}).to_dict()['email_verified'] == 1 and db.collection('users').document(username).get({'phone_verified'}).to_dict()['phone_verified'] == 1:
                    if (valid_password(password) and password == verify):
                        password = make_pw_hash(username, password)
                        doc_ref = db.collection('users').document(username)
                        doc_ref.set({
                            'email_verified': 0,
                            'phone_verified': 0,
                            'password': password
                        }, merge=True)
                        self.response.headers.add_header('Content-Type', 'application/json')
                        result = {
                            'message': 'Password modificata con successo.'
                          }
                        self.response.write(json.dumps(result))
                        return
                    if not valid_password(password):
                            password_error = "Hai inserito una password non valida."
                    if not password == verify:
                            verify_error = "Le password non coincidono."
                    self.response.write("<ul style='list-style-type:none;padding:0;'><li>"+password_error+"</li><li>"+verify_error+"</li></ul>")
                    self.response.set_status(400, "<ul style='list-style-type:none;padding:0;'><li>"+password_error+"</li><li>"+verify_error+"</li></ul>")
                else:
                    self.response.write("È necessario inserire i codici di verifica per l'indirizzo email e per il numero di cellulare.")
                    self.response.set_status(400, "È necessario inserire i codici di verifica per l'indirizzo email e per il numero di cellulare.")
            else:
                if oldpassword == db.collection('users').document(username).get({'password'}).to_dict()['password']:
                    if (valid_password(password) and password == verify):
                        password = make_pw_hash(username, password)
                        doc_ref = db.collection('users').document(username)
                        doc_ref.set({
                            'password': password
                        }, merge=True)
                        self.response.headers.add_header('Content-Type', 'application/json')
                        result = {
                            'message': 'Password modificata con successo.'
                          }
                        self.response.write(json.dumps(result))
                        return
                    if not valid_password(password):
                            password_error = "Hai inserito una password non valida."
                    if not password == verify:
                            verify_error = "Le password non coincidono."
                    self.response.write("<ul style='list-style-type:none;padding:0;'><li>"+password_error+"</li><li>"+verify_error+"</li></ul>")
                    self.response.set_status(400, "<ul style='list-style-type:none;padding:0;'><li>"+password_error+"</li><li>"+verify_error+"</li></ul>")
                else:
                    self.response.write("Le informazioni dell'utente loggato sono sbagliate.")
                    self.response.set_status(400, "Le informazioni dell'utente loggato sono sbagliate.")

class RecoverySuccessHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('recoverysuccess.html').render())

class ProfileHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('profile.html').render())

class PickupHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('pickup.html').render())

class CheckPickupHandler(webapp3.RequestHandler):
    def post(self):
        username = self.request.get("username")
        password = self.request.get("password")
        if db.collection('users') and db.collection('users').document(username).get().exists and len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) == 2 and password == db.collection('users').document(username).get({'password'}).to_dict()['password']:
            pickupdict = db.collection('users').document(username).get({'day_for_pickup', 'hour_for_pickup'}).to_dict()
            if len(pickupdict) == 2:
                self.response.headers.add_header('Content-Type', 'application/json')
                result = {
                    'redirectToLogin': 0,
                    'day_for_pickup': pickupdict['day_for_pickup'],
                    'hour_for_pickup': pickupdict['hour_for_pickup'],
                    'message': "L'utente ha già scelto un orario di ritiro."
                  }
                self.response.write(json.dumps(result))
            else:
                self.response.headers.add_header('Content-Type', 'application/json')
                result = {
                    'redirectToLogin': 0,
                    'day_for_pickup': "",
                    'hour_for_pickup': "",
                    'message': "Non è ancora stato scelto un orario di ritiro."
                  }
                self.response.write(json.dumps(result))
        else:
            self.response.headers.add_header('Content-Type', 'application/json')
            result = {
                'redirectToLogin': 1,
                'message': "L'utente non è loggato o il cookie è incorretto. Rimanda l'utente alla pagina di accesso."
              }
            self.response.write(json.dumps(result))

class PickupHourHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('pickuphour.html').render())

class ConfirmPickupHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('confirmpickup.html').render())
    def post(self):
        username = self.request.get("username")
        password = self.request.get("password")
        day_for_pickup = self.request.get("day_for_pickup")
        hour_for_pickup = self.request.get("hour_for_pickup")
        if db.collection('users') and db.collection('users').document(username).get().exists and len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) == 2 and password == db.collection('users').document(username).get({'password'}).to_dict()['password']:
            doc_ref = db.collection('users').document(username)
            doc_ref.set({
                'day_for_pickup': day_for_pickup,
                'hour_for_pickup': hour_for_pickup
            }, merge=True)
            self.response.headers.add_header('Content-Type', 'application/json')
            result = {
                'redirectToLogin': 0,
                'day_for_pickup': day_for_pickup,
                'hour_for_pickup': hour_for_pickup,
                'message': "Orario di ritiro registrato con successo."
              }
            self.response.write(json.dumps(result))
        else:
            self.response.headers.add_header('Content-Type', 'application/json')
            result = {
                'redirectToLogin': 1,
                'message': "L'utente non è loggato o il cookie è incorretto. Rimanda l'utente alla pagina di accesso."
              }
            self.response.write(json.dumps(result))

class ReadyForPickupHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('readyforpickup.html').render())

class GuideHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('guide.html').render())

class SettingsHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('settings.html').render())

class CalendarHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('calendar.html').render())

class HospitalInfoHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('hospitalinfo.html').render())

class DashboardHandler(webapp3.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('dashboard.html').render())

class SubscribeToPushHandler(webapp3.RequestHandler):
    def post(self):
        username = self.request.get("username")
        password = self.request.get("password")
        endpoint = self.request.get("endpoint")
        p256dh = self.request.get("p256dh")
        auth = self.request.get("auth")
        if db.collection('users'):
            if db.collection('users').document(username).get().exists:
                if len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) == 2:
                    if password == db.collection('users').document(username).get({'password'}).to_dict()['password']:
                        doc_ref = db.collection('users').document(username)
                        doc_ref.set({
                            'endpoint': endpoint,
                            'p256dh': p256dh,
                            'auth': auth
                        }, merge=True)
                        self.response.headers.add_header('Content-Type', 'application/json')
                        result = {
                            'message': "L'utente si è sottoscritto alle notifiche push con successo."
                          }
                        self.response.write(json.dumps(result))
                    else:
                        self.response.write("La password hash memorizzata nel cookie non corrisponde.")
                        self.response.set_status(400, "La password hash memorizzata nel cookie non corrisponde.")
                else:
                    self.response.write("Il processo di registrazione deve essere completato prima di accedere.")
                    self.response.set_status(400, "Il processo di registrazione deve essere completato prima di accedere.")
            else:
                self.response.write("Lo username inserito non esiste.")
                self.response.set_status(400, "Lo username inserito non esiste.")
        else:
            self.response.write("The username you entered doesn't exist.")
            self.response.set_status(400, "Lo username inserito non esiste.")

def render_str(template, **params):
                t = jinja_env.get_template(template)
                return t.render(params)

class Handler(webapp3.RequestHandler):
        def write(self, *a, **kw):
                self.response.out.write(*a, **kw)
        def render_str(self, template, **params):
                return render_str(template, **params)
        def render(self, template, **kw):
                self.write(self.render_str(template, **kw))

class LoginHandler(Handler):
        def get(self):
                self.render("login.html", username="", login_error="")
        def post(self):
                username = self.request.get("username")
                password = self.request.get("password")
                if username == "":
                    self.response.write("Inserisci lo username.")
                    self.response.set_status(400, "Inserisci lo username.")
                else:
                    if db.collection('users'):
                        if db.collection('users').document(username).get().exists:
                            if len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) == 2:
                                if valid_pw(username, password, db.collection('users').document(username).get({'password'}).to_dict()['password']):
                                    self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(username+"|"+db.collection('users').document(username).get({'password'}).to_dict()['password']))
                                    self.response.headers.add_header('Content-Type', 'application/json')
                                    result = {
                                        'message': 'Accesso utente effettuato con successo.'
                                      }
                                    self.response.write(json.dumps(result))
                                else:
                                    self.response.write("La password inserita è sbagliata.")
                                    self.response.set_status(400, "La password inserita è sbagliata.")
                            else:
                                self.response.write("È necessario completare la registrazione prima di accedere.")
                                self.response.set_status(400, "È necessario completare la registrazione prima di accedere.")
                        else:
                            self.response.write("Lo username inserito non esiste.")
                            self.response.set_status(400, "Lo username inserito non esiste.")
                    else:
                        self.response.write("Lo username inserito non esiste.")
                        self.response.set_status(400, "Lo username inserito non esiste.")

class CheckLoginHandler(Handler):
        def post(self):
                username = self.request.get("username")
                password = self.request.get("password")
                if db.collection('users') and db.collection('users').document(username).get().exists and len(db.collection('users').document(username).get({'email', 'phone'}).to_dict()) == 2 and password == db.collection('users').document(username).get({'password'}).to_dict()['password']:
                    self.response.headers.add_header('Content-Type', 'application/json')
                    result = {
                        'redirectToLogin': 0,
                        'message': "L'utente ha già eseguito l'accesso. Rimanda utente alla pagina di ritiro."
                      }
                    self.response.write(json.dumps(result))
                else:
                    self.response.headers.add_header('Content-Type', 'application/json')
                    result = {
                        'redirectToLogin': 1,
                        'message': "L'utente non ha eseguito l'accesso o il cookie non è corretto. Rimanda utente alla pagina di accesso."
                      }
                    self.response.write(json.dumps(result))

class LogoutHandler(Handler):
        def get(self):
                self.response.headers.add_header("Set-Cookie", "userid=; Path=/")
                self.redirect("/")

import mimetypes
class StaticFileHandler(webapp3.RequestHandler):
    def get(self, path):
        abs_path = os.path.abspath(os.path.join(self.app.config.get('webapp3_static.static_file_path', 'static'), path))
        if os.path.isdir(abs_path) or abs_path.find(os.getcwd()) != 0:
            self.response.set_status(403)
            return
        try:
            f = open(abs_path, 'r')
            self.response.headers.add_header('Content-Type', mimetypes.guess_type(abs_path)[0])
            self.response.headers['Content-Type'] = mimetypes.guess_type(abs_path)[0]
            self.response.out.write(f.read())
            f.close()
        except:
            self.response.set_status(404)

app = webapp3.WSGIApplication([
        ('/', MainPage),
        ('/index', MainPage),
        ('/index.html', MainPage),
        ('/tutorial', TutorialHandler),
        ('/login', LoginHandler),
        ('/checklogin', CheckLoginHandler),
        ('/logout', LogoutHandler),
        ('/signup', SignupHandler),
        ('/emailphonesignup', EmailPhoneSignupHandler),
        ('/verifyemail', VerifyEmailHandler),
        ('/verifyphone', VerifyPhoneHandler),
        ('/success', SuccessHandler),
        ('/newpassword', NewPasswordHandler),
        ('/verifyemailforrecovery', VerifyEmailForRecoveryHandler),
        ('/verifyphoneforrecovery', VerifyPhoneForRecoveryHandler),
        ('/choosenewpassword', ChooseNewPasswordHandler),
        ('/recoverysuccess', RecoverySuccessHandler),
        ('/profile', ProfileHandler),
        ('/pickup', PickupHandler),
        ('/checkpickup', CheckPickupHandler),
        ('/pickuphour', PickupHourHandler),
        ('/confirmpickup', ConfirmPickupHandler),
        ('/readyforpickup', ReadyForPickupHandler),
        ('/guide', GuideHandler),
        ('/settings', SettingsHandler),
        ('/calendar', CalendarHandler),
        ('/hospitalinfo', HospitalInfoHandler),
        ('/subscribetopush', SubscribeToPushHandler),
        ('/dashboard', DashboardHandler),
        (r'/static/(.+)', StaticFileHandler)
], debug = True)