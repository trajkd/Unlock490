var grid = GridStack.init();
grid.addWidget(`<div>
					<div class="grid-stack-item-content">
						<div class="mdc-card availability">
							<div class="mdc-card__primary-action">
								<div class="mdc-card__media">
									<div class="mdc-card__media-content">Modifica disponibilità orari di ritiro</div>
								</div>
								<div class="mdc-content">
									<div class="mdc-tab-bar" role="tablist">
										<div class="mdc-tab-scroller">
									    	<div class="mdc-tab-scroller__scroll-area">
									    		<div class="mdc-tab-scroller__scroll-content">
									        		<button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" id="pick-monday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Lunedì</span>
									        			</span>
									        			<span class="mdc-tab-indicator mdc-tab-indicator--active">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									        		<button class="mdc-tab" role="tab" aria-selected="true" tabindex="1" id="pick-tuesday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Martedì</span>
									        			</span>
									        			<span class="mdc-tab-indicator">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									        		<button class="mdc-tab" role="tab" aria-selected="true" tabindex="2" id="pick-wednesday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Mercoledì</span>
									        			</span>
									        			<span class="mdc-tab-indicator">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									        		<button class="mdc-tab" role="tab" aria-selected="true" tabindex="3" id="pick-thursday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Giovedì</span>
									        			</span>
									        			<span class="mdc-tab-indicator">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									        		<button class="mdc-tab" role="tab" aria-selected="true" tabindex="4" id="pick-friday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Venerdì</span>
									        			</span>
									        			<span class="mdc-tab-indicator">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									        		<button class="mdc-tab" role="tab" aria-selected="true" tabindex="5" id="pick-saturday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Sabato</span>
									        			</span>
									        			<span class="mdc-tab-indicator">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									        		<button class="mdc-tab" role="tab" aria-selected="true" tabindex="6" id="pick-sunday">
									        			<span class="mdc-tab__content">
									            			<span class="mdc-tab__text-label">Domenica</span>
									        			</span>
									        			<span class="mdc-tab-indicator">
									            			<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
									        			</span>
									        			<span class="mdc-tab__ripple"></span>
									        		</button>
									    		</div>
								    		</div>
										</div>
									</div>
									<div class="mdc-form-field">
										<div class="monday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="monday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="monday2030">20:30</label>
											</div>
										</div>

										<div class="tuesday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="tuesday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="tuesday2030">20:30</label>
											</div>
										</div>


										<div class="wednesday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="wednesday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="wednesday2030">20:30</label>
											</div>
										</div>


										<div class="thursday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="thursday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="thursday2030">20:30</label>
											</div>
										</div>


										<div class="friday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="friday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="friday2030">20:30</label>
											</div>
										</div>


										<div class="saturday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="saturday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="saturday2030">20:30</label>
											</div>
										</div>


										<div class="sunday-hours">
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0600">6:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0630">6:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0700">7:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0730">7:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0800">8:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0830">8:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0900">9:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday0930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday0930">9:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1000">10:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1030">10:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1100"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1100">11:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1130"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1130">11:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1200"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1200">12:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1230"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1230">12:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1300"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1300">13:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1330"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1330">13:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1400"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1400">14:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1430"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1430">14:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1500"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1500">15:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1530"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1530">15:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1600"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1600">16:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1630"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1630">16:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1700"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1700">17:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1730"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1730">17:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1800"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1800">18:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1830"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1830">18:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1900"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1900">19:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday1930"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday1930">19:30</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday2000"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday2000">20:00</label>
											</div>
											<div>
												<div class="mdc-checkbox">
													<input type="checkbox" class="mdc-checkbox__native-control" id="sunday2030"/>
													<div class="mdc-checkbox__background">
														<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
															<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
														</svg>
														<div class="mdc-checkbox__mixedmark"></div>
													</div>
													<div class="mdc-checkbox__ripple"></div>
												</div>
												<label for="sunday2030">20:30</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="mdc-card__actions">
								<div class="mdc-card__action-buttons">
									<button class="mdc-button mdc-card__action mdc-card__action--button">
										<div class="mdc-button__ripple"></div>
										<span class="mdc-button__label">Salva</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>`, {width: 6, height: 6, noResize: 1});

$(".tuesday-hours").css("display", "none");
$(".wednesday-hours").css("display", "none");
$(".thursday-hours").css("display", "none");
$(".friday-hours").css("display", "none");
$(".saturday-hours").css("display", "none");
$(".sunday-hours").css("display", "none");

$(document).on("click touch", "#pick-monday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "block");
	$(".tuesday-hours").css("display", "none");
	$(".wednesday-hours").css("display", "none");
	$(".thursday-hours").css("display", "none");
	$(".friday-hours").css("display", "none");
	$(".saturday-hours").css("display", "none");
	$(".sunday-hours").css("display", "none");
});

$(document).on("click touch", "#pick-tuesday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "none");
	$(".tuesday-hours").css("display", "block");
	$(".wednesday-hours").css("display", "none");
	$(".thursday-hours").css("display", "none");
	$(".friday-hours").css("display", "none");
	$(".saturday-hours").css("display", "none");
	$(".sunday-hours").css("display", "none");
});

$(document).on("click touch", "#pick-wednesday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "none");
	$(".tuesday-hours").css("display", "none");
	$(".wednesday-hours").css("display", "block");
	$(".thursday-hours").css("display", "none");
	$(".friday-hours").css("display", "none");
	$(".saturday-hours").css("display", "none");
	$(".sunday-hours").css("display", "none");
});

$(document).on("click touch", "#pick-thursday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "none");
	$(".tuesday-hours").css("display", "none");
	$(".wednesday-hours").css("display", "none");
	$(".thursday-hours").css("display", "block");
	$(".friday-hours").css("display", "none");
	$(".saturday-hours").css("display", "none");
	$(".sunday-hours").css("display", "none");
});

$(document).on("click touch", "#pick-friday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "none");
	$(".tuesday-hours").css("display", "none");
	$(".wednesday-hours").css("display", "none");
	$(".thursday-hours").css("display", "none");
	$(".friday-hours").css("display", "block");
	$(".saturday-hours").css("display", "none");
	$(".sunday-hours").css("display", "none");
});

$(document).on("click touch", "#pick-saturday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "none");
	$(".tuesday-hours").css("display", "none");
	$(".wednesday-hours").css("display", "none");
	$(".thursday-hours").css("display", "none");
	$(".friday-hours").css("display", "none");
	$(".saturday-hours").css("display", "block");
	$(".sunday-hours").css("display", "none");
});

$(document).on("click touch", "#pick-sunday", function() {
	$(".mdc-tab").removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");
	$(".mdc-tab").find(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	$(this).find(".mdc-tab-indicator").addClass("mdc-tab-indicator--active");
	$(".monday-hours").css("display", "none");
	$(".tuesday-hours").css("display", "none");
	$(".wednesday-hours").css("display", "none");
	$(".thursday-hours").css("display", "none");
	$(".friday-hours").css("display", "none");
	$(".saturday-hours").css("display", "none");
	$(".sunday-hours").css("display", "block");
});

grid.addWidget(`<div>
					<div class="grid-stack-item-content">
						<div class="mdc-card patients">
							<div class="mdc-card__primary-action">
								<div class="mdc-card__media">
									<div class="mdc-card__media-content">Pazienti in cura</div>
								</div>
								<div class="mdc-content">
									<div class="mdc-data-table">
										<div class="mdc-data-table__table-container">
											<table class="mdc-data-table__table" aria-label="Pazienti in cura">
												<thead>
													<tr class="mdc-data-table__header-row">
														<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Username</th>
														<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Codice fiscale</th>
														<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Email</th>
														<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Ritirati</th>
														<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Non ritirati</th>
													</tr>
												</thead>
												<tbody class="mdc-data-table__content">
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`, {width: 6, height: 6, noResize: 1});

app.firestore()
  .collection("users")
  .onSnapshot((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      other: doc.data(),
    }));
    for (var i = 0; i < data.length; i++) {
    	var user = data[i];
    	$(".mdc-data-table__content").append(`<tr class="mdc-data-table__row">
											<th class="mdc-data-table__cell" scope="row">`+user.id+`</th>
											<th class="mdc-data-table__cell" scope="row">`+user.other.email+`</th>
											<th class="mdc-data-table__cell" scope="row">`+"PIGMFW91M48F428O"+`</th>
											<td class="mdc-data-table__cell mdc-data-table__cell--numeric">`+0+`</td>
											<td class="mdc-data-table__cell mdc-data-table__cell--numeric">`+0+`</td>
										</tr>`);
    }
  });

grid.addWidget(`<div>
					<div class="grid-stack-item-content">
						<div class="mdc-card pickedup">
							<div class="mdc-card__primary-action">
								<div class="mdc-card__media">
									<div class="mdc-card__media-content">Farmaci ritirati</div>
								</div>
								<div class="mdc-content" style="font-size: 140px">
									0
								</div>
							</div>
						</div>
					</div>
				</div>`, {width: 6, height: 6, noResize: 1});

grid.addWidget(`<div>
					<div class="grid-stack-item-content">
						<div class="mdc-card not-pickedup">
							<div class="mdc-card__primary-action">
								<div class="mdc-card__media">
									<div class="mdc-card__media-content">Farmaci non ritirati</div>
								</div>
								<div class="mdc-content" style="font-size: 140px">
									0
								</div>
							</div>
						</div>
					</div>
				</div>`, {width: 6, height: 6, noResize: 1});