import os

import webapp2
import jinja2

# import boto3

# os.environ['AWS_PROFILE'] = "Default"
# os.environ['AWS_DEFAULT_REGION'] = "us-west-2"

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

def make_salt():
    return ''.join(random.choice(string.letters) for x in xrange(5))

def make_pw_hash(name, pw, salt = None):
    if not salt:
        salt = make_salt()
    h = hashlib.sha256(name + pw + salt).hexdigest()
    return '%s,%s' % (h, salt)

def valid_pw(name, pw, h):
    ###Your code here
    if make_pw_hash(name, pw, h.split(",")[1]) == h:
        return True

class MainPage(webapp2.RequestHandler):
        def get(self):
            self.response.out.write(jinja_env.get_template('base.html').render())
        def post(self, username="", email="", username_error="", password_error="", verify_error="", email_error="", ):
                username = self.request.get("username")
                password = self.request.get("password")
                verify = self.request.get("verify")
                email = self.request.get("email")
                if (valid_username(username) and valid_password(password) and valid_email(email) and password == verify):
                        #if len(db.Query(User).filter("username =", username).fetch(limit=1))==0:
                        if len(query_authors(username))==0:
                                password = make_pw_hash(username, password)
                                #u = User(username=username, password=password, email=email)
                                #u.put()
                                dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
                                table = dynamodb.Table('Author')
                                table.put_item(
                                    Item={
                                        'username': username,
                                        'password': password,
                                        'email': email
                                    }
                                )
                                #self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u.key().id())+"|"+u.password))
                                self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(username+"|"+password))
                                self.redirect("/")
                        else:
                                self.write_form(username_error="That user already exists.")
                if not valid_username(username):
                        username_error = "That's not a valid username."
                if not valid_password(password):
                        password_error = "That's not a valid password."
                if not password == verify:
                        verify_error = "Your passwords didn't match."
                if not valid_email(email):
                        email_error = "That's not a valid email."

class SignupHandler(webapp2.RequestHandler):
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
        def post(self, username="", email="", username_error="", password_error="", verify_error="", email_error="", ):
                username = self.request.get("username")
                password = self.request.get("password")
                verify = self.request.get("verify")
                email = self.request.get("email")
                if (valid_username(username) and valid_password(password) and valid_email(email) and password == verify):
                        #if len(db.Query(User).filter("username =", username).fetch(limit=1))==0:
                        if len(query_authors(username))==0:
                                password = make_pw_hash(username, password)
                                #u = User(username=username, password=password, email=email)
                                #u.put()
                                dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
                                table = dynamodb.Table('Author')
                                table.put_item(
                                    Item={
                                        'username': username,
                                        'password': password,
                                        'email': email
                                    }
                                )
                                #self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u.key().id())+"|"+u.password))
                                self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(username+"|"+password))
                                self.redirect("/")
                        else:
                                self.write_form(username_error="That user already exists.")
                if not valid_username(username):
                        username_error = "That's not a valid username."
                if not valid_password(password):
                        password_error = "That's not a valid password."
                if not password == verify:
                        verify_error = "Your passwords didn't match."
                if not valid_email(email):
                        email_error = "That's not a valid email."
                self.write_form(username, email, username_error, password_error, verify_error, email_error)

class EmailPhoneSignupHandler(webapp2.RequestHandler):
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
        def post(self, username="", email="", username_error="", password_error="", verify_error="", email_error="", ):
                username = self.request.get("username")
                password = self.request.get("password")
                verify = self.request.get("verify")
                email = self.request.get("email")
                if (valid_username(username) and valid_password(password) and valid_email(email) and password == verify):
                        #if len(db.Query(User).filter("username =", username).fetch(limit=1))==0:
                        if len(query_authors(username))==0:
                                password = make_pw_hash(username, password)
                                #u = User(username=username, password=password, email=email)
                                #u.put()
                                dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
                                table = dynamodb.Table('Author')
                                table.put_item(
                                    Item={
                                        'username': username,
                                        'password': password,
                                        'email': email
                                    }
                                )
                                #self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u.key().id())+"|"+u.password))
                                self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(username+"|"+password))
                                self.redirect("/")
                        else:
                                self.write_form(username_error="That user already exists.")
                if not valid_username(username):
                        username_error = "That's not a valid username."
                if not valid_password(password):
                        password_error = "That's not a valid password."
                if not password == verify:
                        verify_error = "Your passwords didn't match."
                if not valid_email(email):
                        email_error = "That's not a valid email."
                self.write_form(username, email, username_error, password_error, verify_error, email_error)

class VerifyEmailHandler(webapp2.RequestHandler):
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
        def post(self, username="", email="", username_error="", password_error="", verify_error="", email_error="", ):
                username = self.request.get("username")
                password = self.request.get("password")
                verify = self.request.get("verify")
                email = self.request.get("email")
                if (valid_username(username) and valid_password(password) and valid_email(email) and password == verify):
                        #if len(db.Query(User).filter("username =", username).fetch(limit=1))==0:
                        if len(query_authors(username))==0:
                                password = make_pw_hash(username, password)
                                #u = User(username=username, password=password, email=email)
                                #u.put()
                                dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
                                table = dynamodb.Table('Author')
                                table.put_item(
                                    Item={
                                        'username': username,
                                        'password': password,
                                        'email': email
                                    }
                                )
                                #self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u.key().id())+"|"+u.password))
                                self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(username+"|"+password))
                                self.redirect("/")
                        else:
                                self.write_form(username_error="That user already exists.")
                if not valid_username(username):
                        username_error = "That's not a valid username."
                if not valid_password(password):
                        password_error = "That's not a valid password."
                if not password == verify:
                        verify_error = "Your passwords didn't match."
                if not valid_email(email):
                        email_error = "That's not a valid email."
                self.write_form(username, email, username_error, password_error, verify_error, email_error)

class VerifyPhoneHandler(webapp2.RequestHandler):
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
        def post(self, username="", email="", username_error="", password_error="", verify_error="", email_error="", ):
                username = self.request.get("username")
                password = self.request.get("password")
                verify = self.request.get("verify")
                email = self.request.get("email")
                if (valid_username(username) and valid_password(password) and valid_email(email) and password == verify):
                        #if len(db.Query(User).filter("username =", username).fetch(limit=1))==0:
                        if len(query_authors(username))==0:
                                password = make_pw_hash(username, password)
                                #u = User(username=username, password=password, email=email)
                                #u.put()
                                dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
                                table = dynamodb.Table('Author')
                                table.put_item(
                                    Item={
                                        'username': username,
                                        'password': password,
                                        'email': email
                                    }
                                )
                                #self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u.key().id())+"|"+u.password))
                                self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(username+"|"+password))
                                self.redirect("/")
                        else:
                                self.write_form(username_error="That user already exists.")
                if not valid_username(username):
                        username_error = "That's not a valid username."
                if not valid_password(password):
                        password_error = "That's not a valid password."
                if not password == verify:
                        verify_error = "Your passwords didn't match."
                if not valid_email(email):
                        email_error = "That's not a valid email."
                self.write_form(username, email, username_error, password_error, verify_error, email_error)

class TutorialHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('tutorial.html').render())

class SuccessHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('success.html').render())

class DoubtsHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('doubts.html').render())

class NewPasswordHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('newpassword.html').render())

class VerifyEmailForRecoveryHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('verifyemailforrecovery.html').render())

class VerifyPhoneForRecoveryHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('verifyphoneforrecovery.html').render())

class ChooseNewPasswordHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('choosenewpassword.html').render())

class RecoverySuccessHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('recoverysuccess.html').render())

class MenuHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('menu.html').render())

class MenuHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('menu.html').render())

class ProfileHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('profile.html').render())

class PickupHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('pickup.html').render())

class PickupHourHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('pickuphour.html').render())

class ConfirmPickupHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('confirmpickup.html').render())

class ReadyForPickupHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('readyforpickup.html').render())

class TherapyHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('therapy.html').render())

class NotificationsHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('notifications.html').render())

class GuideHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('guide.html').render())

class SettingsHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(jinja_env.get_template('settings.html').render())

def render_str(template, **params):
                t = jinja_env.get_template(template)
                return t.render(params)

class Handler(webapp2.RequestHandler):
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
                #u = db.Query(User).filter("username =", username).fetch(limit=1)
                u = query_authors(username)
                if not len(u)==0 and valid_pw(username, password, u[0]['password']):
                        #self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u[0].key().id())+"|"+str(u[0].password)))
                        self.response.headers.add_header("Set-Cookie", "userid=%s; Path=/"%(str(u[0]['username'])+"|"+str(u[0]['password'])))
                        self.redirect("/")
                else:
                        self.render("login.html", username=username, login_error="Invalid login")

class LogoutHandler(Handler):
        def get(self):
                self.response.headers.add_header("Set-Cookie", "userid=; Path=/")
                self.redirect("/")

import mimetypes
class StaticFileHandler(webapp2.RequestHandler):
    def get(self, path):
        abs_path = os.path.abspath(os.path.join(self.app.config.get('webapp2_static.static_file_path', 'static'), path))
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

app = webapp2.WSGIApplication([
        ('/', MainPage),
        ('/index', MainPage),
        ('/index.html', MainPage),
        ('/tutorial', TutorialHandler),
        ('/login', LoginHandler),
        ('/logout', LogoutHandler),
        ('/signup', SignupHandler),
        ('/emailphonesignup', EmailPhoneSignupHandler),
        ('/verifyemail', VerifyEmailHandler),
        ('/verifyphone', VerifyPhoneHandler),
        ('/success', SuccessHandler),
        ('/doubts', DoubtsHandler),
        ('/newpassword', NewPasswordHandler),
        ('/verifyemailforrecovery', VerifyEmailForRecoveryHandler),
        ('/verifyphoneforrecovery', VerifyPhoneForRecoveryHandler),
        ('/choosenewpassword', ChooseNewPasswordHandler),
        ('/recoverysuccess', RecoverySuccessHandler),
        ('/menu', MenuHandler),
        ('/profile', ProfileHandler),
        ('/pickup', PickupHandler),
        ('/pickuphour', PickupHourHandler),
        ('/confirmpickup', ConfirmPickupHandler),
        ('/readyforpickup', ReadyForPickupHandler),
        ('/therapy', TherapyHandler),
        ('/notifications', NotificationsHandler),
        ('/guide', GuideHandler),
        ('/settings', SettingsHandler),
        (r'/static/(.+)', StaticFileHandler)
], debug = True)