/**
 * Storage for all the strings in project; change once, use everywhere ;)
 *
 * @module helpers/strings
 * @license MIT
 */

const englishObjectId = '581d0b8db33e47e7008726bd';
const russianObjectId = '581d0b8db33e47e7008726be';

const english = {
  tutorialMessages: {
    initialMessage: 'Not sure how this bot works? No worries — we got you covered. Just try one of the tutorials below (either you are a freelancer or a client looking for the freelancers).',
    initialFreelancerMessage: 'The main purpose of our bot is to provide potential clients with a list of available freelancers who suit job requirements. After a client completes job description, desired skill category and hourly rate, we send a list of freelancers alongside with their bio and rating. Client reads through bios and desides who should receive initial job offer.\n\nIf client decides that you fit job requirements, you will get a message with buttons like the ones after this text. Please note that if you select "Report" or "Not interested" client will not be able too see you in a list of available freelancers for this job anymore. Also note that you can see client\'s rating but not the username.\n\nYou can always change your mind after you have selected an option. Go ahead, select your response for this job offer!\n\n⭐️⭐️⭐️⭐️ (10)\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    acceptFreelancerMessage: 'When reporting or identifying that you are not interested in a job offer you get removed from the list of available freelancers for this job. However you will appear in the list of available freelancers for other jobs as well as you can always change your mind.\n\nWhen you select "Interested" option, client gets notifyed about this and you should expect him to reach you in private messages to discuss the details. After client has at least one interested candidate and he wants to offer the job to one of the interested candidates, if you are the chosen one, you will receive a job offer with two buttons: "Accept" and "Reject".\n\nLet us simulate the waiting period, please wait for 10 seconds (while client is considering you for a job).\n\n⭐️⭐️⭐️⭐️ (10)\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    acceptFreelancerMessageNotInterested: 'When reporting or identifying that you are not interested in a job offer you get removed from the list of available freelancers for this job. However you will appear in the list of available freelancers for other jobs as well as you can always change your mind.\n\nFor the sake of this tutorial we identifyed you as an interested candidate. When you select "Interested" option, client gets notifyed about this and you should expect him to reach you in private messages to discuss the details. After client has at least one interested candidate and he wants to offer the job to one of the interested candidates, if you are the chosen one, you will receive a job offer with two buttons: "Accept" and "Reject".\n\nLet us simulate the waiting period, please wait for 10 seconds (while client is considering you for a job).\n\n⭐️⭐️⭐️⭐️ (10)\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    acceptFreelancerMessageFinished: 'When reporting or identifying that you are not interested in a job offer you get removed from the list of available freelancers for this job. However you will appear in the list of available freelancers for other jobs as well as you can always change your mind.\n\nWhen you select "Interested" option, client gets notifyed about this and you should expect him to reach you in private messages to discuss the details. After client has at least one interested candidate and he wants to offer the job to one of the interested candidates, if you are the chosen one, you will receive a job offer with two buttons: "Accept" and "Reject". Let us simulate the waiting period, please wait for 10 seconds (while client is considering you for a job).\n\nGreat! Looks like your potential client has chosen you among other interested freelancers (that was easy enough) — now you just need to select "Accept" or "Refuse". Also please note that now you can see the username of the client and you can talk directly to the client in private messages.\n\n⭐️⭐️⭐️⭐️ (10) @arbeit_bot\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    rateFreelancerMessage: 'Wonderful! You just accepted this job offer. The next step would be to actually complete the job in real life and either rate your client or report if you find that something was inappropriate.\n\nPlease note that refusing a job offer is the same as touching "Not interested" when you first receive the job message — it gets you out of the available freelancers list. Be careful though — refusing a job offer cannot be undone.\n\n⭐️⭐️⭐️⭐️ (10) @arbeit_bot\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    rateFreelancerMessageRefused: 'Wow! Didn\'t see that coming — you just refused our demo offer. In the real life it is the same as touching "Not interested" when you first receive the job message — it gets you out of the available freelancers list. Be careful though — refusing a job offer cannot be undone.\n\nNevertheless, we had the power to select "Accept" for the sake of this tutorial. After you accept the job offer it\'s finally the time to work. And when the job is completed, you can either rate your client or report if you find something was inappropriate.\n\n⭐️⭐️⭐️⭐️ (10) @arbeit_bot\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    endFreelancerMessage: 'Magnificent! You have selected "Rate" which shown you a list of rate options for your clients. Go on — rate our tutorial today!\n\nAs a side note: reporting a job would trigger moderators investigation process (you would usually do that if client didn\'t pay or for any other bad reason).\n\n⭐️⭐️⭐️⭐️ (10) @arbeit_bot\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    endFreelancerMessageReport: 'Ugh, this happens sometimes... you have decided to report your client for some reason: maybe your client didn\'t pay for work, or was rude to you, or anything else could happen. Not to worry: our moderators will contact you soon to try get the reason why you did it and ban client if necessary (not right now — this was a simulation, remeber?)\n\nHowever, we have used our special powers and selected "Rate" for you instead which shown you a list of rate options for your clients. Go on — rate our tutorial today!\n\n⭐️⭐️⭐️⭐️ (10) @arbeit_bot\n[Web backend]\nThis is a sample job. I know that we could have came up with a better sample job description but our imagination vanished unexpectedly today. Also note how you can see client\'s rating as well as number of ratings client received. If there are no rating, it means that this client is new to the @arbeit_bot and haven\'t yet been rated.',
    freelancerTutorialEnd: 'Congratulations! You have successfully completed our freelancer tutorial. That was all you need to receive and complete job offers. We hope you now understand better how this bot works.\n\nPlease, make sure to fill out your "Profile" so that clients could send you job offer like the one simnulated during the tutorial.\n\nAlso, it would be a good idea to try our client tutorial to understand how job process looks like from the other side — you can do that by going to "Help" first. Cheers!',
    clientTutorialLanguage: 'Pick language',
    clientTutorialSupercategory: 'Pick category',
    clientTutorialCategory: 'Pick subcategory',
    clientTutorialInterestedFreelancers: 'Please pick interested candidates',
    clientTutorialPickFreelancer: 'Please pick the candidate',
    clientTutorialRate: 'Please rate or report freelancer',
    clientTutorialFinishRate: 'Please press star message for freelancer',
    clientTutorialEnd: 'You did it!',
  },
  tutorialButtons: {
    freelancerTutorial: 'Freelancer tutorial',
    clientTutorial: 'Client tutorial',
  },
  tutorialButton: 'Launch tutorial',
  tutorialInline: 'tI',
  freelancerTutorialInline: 'fTI',
  freelancerTutorialInterestedInline: 'fTII',
  freelancerTutorialAcceptedInline: 'fTAI',
  freelancerTutorialRatedInline: 'fTRI',
  freelancerTutorialEndInline: 'fTEI',
  clientTutorialInline: 'cTI',
  clientTutorialLanguageInline: 'cTLI',
  clientTutorialSupercategoryInline: 'cTSI',
  clientTutorialCategoryInline: 'cTCI',
  clientTutorialFreelancersInline: 'cTFI',
  showBio: 'Show bio',
  resubscribe: 'Resubscribe',
  unsubscribe: 'Unsubscribe',
  hideButtons: 'Keep',
  jobCreationFindFreelancerReminderMessage1: 'It looks like you created this job yesterday:',
  jobCreationFindFreelancerReminderMessage2: 'but didn\'t have a chance to find the freelancers. If you need assitance, please contact our support by clicking the button below. Thank you!',
  anotherJobDraftErrorMessage: 'You are already entering description for another job draft. Please either cancel the currently active job draft or provide us with the job description for the currently active job draft.',
  reportThankYouMessage: 'Thank you for reporting this suspicious activity! Our moderators will take immediate action to prevent reported behaviour in the future.',
  banMessage: 'It looks like you have been reported, and our moderators decided that there was a reason to ban you. If this is a mistake, please let us know @arbeit_bot_support – we will see what we can do 👍',
  loadingMessage: '🦄 Loading...',
  askForUsername: 'It looks like you don\'t have a username. Please, set it up in Telegram settings.',
  deprecatedMessage: 'This message is deprecated, please scroll down to see the new message ⤵️',
  initialMessage: 'Welcome to the first free opensource Telegram freelance market.\n\nIf you are looking for a job, please fill out your "Profile". Otherwise, you can proceed to "Find freelancers". Click "Help" if you have any questions.\n\nThank you for joining our friendly family!',
  mainMenuMessage: 'Select "Profile" if you are looking for a job, otherwise – "Find freelancers".',
  noJobsExistMessage: 'You do not have any jobs yet. You can create one by clicking "Create new job" button.',
  clientMenuMessage: 'Please, select an option from the menu below.',
  selectLanguageMessage: 'Please, select what language will you use for your job description. You will only see the freelancers who selected this language as one of their means of communication.',
  selectSupercategoryMessage: 'Please, select a category relevant to your job. The number of available contractors is displayed between [square brackets] for each category.',
  selectCategoryMessage: 'Please, select a subcategory relevant to your job. The number of available contractors is displayed between [square brackets] for each subcategory.',
  selectJobHourlyRateMessage: 'Please, select how much you would like to pay. The price is given in USD/hour to identify the skill levels of developers. You can negotiate a fixed price with the contractor later on. The number of available contractors is displayed between [square brackets] for each rate range.',
  addJobDescriptionMessage: 'Please, provide a job description (100-500 chars). It will be visible to contractors. Please, be brief – the details can be discussed with the contractors later on.',
  jobDescriptionErrorMessage: 'Please make sure that your job description is between 100 and 500 chars.',
  bioErrorMessage: 'Please make sure that your bio fits in 150 chars.',
  addJobDescriptionHideKeyboardMessage: 'You can cancel at any time at job creation message.',
  addBioHideKeyboardMessage: 'You can cancel at any time.',
  filledEverythingMessage: 'You did it! Your profile is now complete. Now just sit back and wait for job offers.',
  fullFreelancerMessageAvailable: 'Your profile is complete! Now just sit back and wait for job offers.',
  fullFreelancerMessageBusy: 'Your profile is complete! However, clients will not contact you since your status is "Busy".',
  emptyFreelancerMessage: 'Welcome to your freelancer profile! Please, fill out your bio, select your hourly rate and categories of expertise.',
  missingFreelancerMessage: 'Welcome to your freelancer profile! You need both to fill out your bio and select your hourly rate and categories of expertise so that clients can see you.',
  helpMessage: 'If you want to learn more about this bot, please go to arbeitbot.com.\n\nIf you have any questions, concerns or just found a bug, please contact us at @arbeit_bot_support.\n\nIf you would like to learn how this bot works, please click the relevant button below.\n\nIn case you want to see the code of @arbeit_bot on GitHub, please follow the link provided below. We would appreciate if you could star our repository as well.\n\nThank you a lot for your support!',
  becameBusyMessage: 'You just set your status to "Busy". You will not receive any new job offers until you switch back to "Available".',
  becameAvailableMessage: 'You just switched to "Available" status. You will now receive relevant job offers until you switch back to "Busy".',
  missingBecameBusyMessage: 'You just changed your status to "Busy". But this doesn\'t make much difference since clients will not be able to find you without properly filled bio, categories and hourly rate.',
  missingBecameAvailableMessage: 'You just changed to "Available" status.  But this doesn\'t make much difference since clients will not be able to find you without properly filled bio, categories and hourly rate.',
  jobCreationSuccessMessage: 'Success! A new job has been created, we have sent it to you below ⤵️',
  pickFreelancersMessage: 'Please, select which contractors should receive job offers from you.',
  editBioMessage: 'Please, enter your bio (max 150 chars). Keep it brief but descriptive – the clients will see it beside your rating. Feel free to add a link to your personal website.',
  selectCandidateMessage: 'Please, select the candidate that you liked the most.',
  changedBioMessage: 'Congrats! Your new bio is:\n\n',
  notChangedBioMessage: 'Your bio not changed.\n\n',
  yourCurrentBio: 'Your current bio:',
  editHourlyRateMessage: 'What is your hourly rate? You will only receive job offers of relevant hourly rate.',
  editLanguageMessage: 'What languages do you speak? You will only receive job offers of selected languages.',
  editInterfaceLanguageMessage: 'Please select your language of preference. This option will only affect the user interface of the bot. It will not affect your ability to receive or post job offers.',
  pickCategoriesMessage: 'Please, select your skills. You will only receive job offers in categories you select.',
  suggestCategoryMessage: 'Suggest your own category',
  waitContractorResponseMessage: 'You sent an offer to one of the freelancers. Please, wait until the freelancer accepts or rejects your offer, or simply select another freelancer if you do not want to wait anymore.',
  acceptOrRejectMessage: 'Congrats! You received a job offer! Please, accept or reject it.',
  freelancerInterestedNotification: ' became interested in ',
  contactWithFreelancerMessage: 'Wonderful! The contractor has accepted your offer! Please, contact them directly, and rate your contractor after the job is done.',
  contactWithClientMessage: 'Great! You have accepted this offer. Now please communicate with the client directly, and rate your experience as soon as you finish the job.',
  rateFreelancerMessage: 'The only thing left is to rate your contractor. How well was the job done?',
  rateClientMessage: 'The only thing left is to rate your client. How good was your experience with this client?',
  reviewFreelancerMessage: 'reviewFreelancerMessage',
  reviewClientMessage: 'reviewClientMessage',
  thanksReviewMessage: 'Thanks for the review!',
  youWereRated: 'You have received a new rating from ',
  clientHasChosenAnotherFreelancer: 'The client has chosen another freelancer.',
  noCandidatesMessage: 'There are no available candidates right now 😥 Please, check back later or create a new job.',
  thisWorkIsRemoved: 'This job has been deleted ✌️',
  thisDraftIsRemoved: 'This job draft has been deleted ✌️',
  shareProfile: 'Share profile',
  mainMenuOptions: {
    findJobs: '👤 Profile',
    findContractors: '⛑ Find freelancers',
    help: '❔ Help',
    chooseLanguage: '📣 Choose language',
  },
  clientMenuOptions: {
    postNewJob: '🔨 Create new job',
    myJobs: '🛠 Created jobs',
    back: '🔙 Back',
  },
  changeTo: 'Change to: ',
  back: '🔙 Back',
  freelanceMenuOptions: {
    editBio: '🖊 Edit bio',
    addBio: '🖊 Add bio',
    editCategories: '📌 Edit categories',
    addCategories: '📌 Add categories',
    editHourlyRate: '💲 Edit hourly rate',
    addHourlyRate: '💲 Add hourly rate',
    back: '🔙 Back',
    busy: '⚒ Busy',
    available: '✅ Available',
    addLanguage: '🇺🇸 Add language',
  },
  hourlyRateOptions: [
    '$0 – $5', '$5 – $10', '$10 – $20',
    '$20 – $30', '$30 – $40', '$40 – $50',
    '$50 – $75', '$75 – $100', '$100 – $200',
    '$200+',
  ],
  hourlyRateAllRatesOption: 'All hourly rates',
  selectedCategory: '✅ ',
  selectedHourlyRate: '✅ ',
  selectedLanguage: '✅ ',
  categoryLeft: '<',
  categoryRight: '>',
  inlineSeparator: '~',
  categoryInline: 'cI',
  hourlyRateInline: 'hRI',
  interfaceLanguageInline: 'iLanI',
  languageInline: 'lanI',
  adminBanInline: 'abI',
  freelancerInline: 'fI',
  freelancerPageInline: 'fPI',
  jobManageInline: 'jMI',
  freelancerJobInline: 'fJI',
  freelancerJobEditInline: 'fJEI',
  selectFreelancerInline: 'sFI',
  selectAnotherFreelancerInline: 'sAFI',
  freelancerAcceptInline: 'fAI',
  askRateClientInline: 'aRCI',
  askRateFreelancerInline: 'aRFI',
  rateClientInline: 'rCI',
  rateFreelancerInline: 'rFI',
  completeJobInline: 'cJI',
  reportJobInline: 'rpJI',
  reportFreelancerInline: 'rpFI',
  reportClientInline: 'rpCI',
  cancelJobCreationInline: 'cJCI',
  categoryBackInline: 'cBaI',
  supercategoryBackInline: 'sCBaI',
  hourlyRateBackInline: 'hRBaI',
  cancelBioEnterInline: 'cBEI',
  inputLanguageInline: 'iLI',
  inputSupercategoryNameInline: 'iSCNI',
  inputCategoryNameInline: 'iCNI',
  inputHourlyRateInline: 'iHRI',
  inputJobDescriptionInline: 'iJDI',
  inputBioCancelInline: 'iBCI',
  unsubscripeFromGodvoiceInline: 'uFGI',
  hideButtonsGodvoiceInline: 'hBGI',
  resubscribeGodvoiceInline: 'rGVI',
  showBioInline: 'sBI',
  jobCreationState: 'jobCreationState',
  inputBioState: 'inputBioState',
  inputLanguageState: 'inputLanguageState',
  inputCategoryNameState: 'inputCategoryNameState',
  inputHourlyRateState: 'inputHourlyRateState',
  inputJobDescriptionState: 'inputJobDescriptionState',
  inputReportMessage: 'inputReportMessage',
  cancel: '❌ Cancel',
  jobCreateCancel: '❌ Cancel',
  selectFreelancerCancel: '❌ Cancel',
  jobSendAllFreelancers: 'Send to all',
  jobRefresh: 'Refresh',
  jobDelete: 'Delete',
  jobEdit: 'Edit',
  jobSelectFreelancer: 'Select contractor',
  jobSelectAnotherFreelancer: 'Select another contractor',
  jobBackPage: '<',
  jobNextPage: '>',
  interestedOption: '✅',
  notInterestedOption: '❌',
  acceptOption: '✅',
  refuseOption: '❌',
  pendingOption: '🕒',
  star: '⭐',
  bioReviews: 'Reviews:',
  saveReviewOption: 'saveReview',
  adminNotifications: {
    adminBanReviewInline: 'aBRI',
    adminDeleteReviewInline: 'aDRI',
    adminOkReviewInline: 'aORI',
    adminReviewDecision: 'Moderators have made a decision about the review.',
  },
  jobStates: {
    searchingForFreelancer: 'searchingForFreelancer',
    freelancerChosen: 'freelancerChosen',
    finished: 'finished',
    /** todo: need to delete this later */
    frozen: 'frozen',
    banned: 'banned',
    rated: 'rated',
    removed: 'removed',
  },
  reviewTypes: {
    byClient: 'byCl',
    byFreelancer: 'byFl',
  },
  freelancerOptions: {
    interested: 'Interested',
    notInterested: 'Not interested',
    report: '❗️ Report',
  },
  freelancerAcceptOptions: {
    accept: '✅ Accept',
    refuse: '❌ Refuse',
  },
  jobFinishedOptions: {
    rate: '⭐ Rate',
    report: '❗️ Report',
  },
  report: {
    thanks: 'Thanks you for your alertness!',
    reason: 'What is the report reason?',
  },
  rateOptions: {
    back: '🔙 Back',
    oneStar: '⭐',
    twoStars: '⭐⭐',
    threeStars: '⭐⭐⭐',
    fourStars: '⭐⭐⭐⭐',
    fiveStars: '⭐⭐⭐⭐⭐',
  },
  rateOptionsArray: [
    '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐',
  ],
  shouldUpdateJobMessage: 'shouldUpdateJobMessage',
  shouldUpdateFreelancerMessage: 'shouldUpdateFreelancerMessage',
  shouldMakeInterested: 'shouldMakeInterested',
  newReview: 'newReview',
};

const russian = {
  showBio: 'Show bio',
  resubscribe: 'Переподписаться',
  unsubscribe: 'Отписаться',
  hideButtons: 'Оставить',
  jobCreationFindFreelancerReminderMessage1: 'Похоже, Вы вчера создали работу:',
  jobCreationFindFreelancerReminderMessage2: 'но так и не выбрали фрилансера. Если Вам нужна какая-либо помощь или у Вас есть какие-либо вопросы, пожалуйста, напишите нам в техподдержку, нажав на кнопку ниже. Спасибо!',
  anotherJobDraftErrorMessage: 'Вы уже вводите описание для другого черновика работы. Пожалуйста, либо отмените активный черновик работы, либо введите описание работы.',
  reportThankYouMessage: 'Спасибо за репорт! Модераторы уже занимаются этим вопросом. Постараемся избежать подобных казусов в будущем.',
  banMessage: 'Похоже, Вас кто-то зарепортил, а модераторы решили, что было за что. В итоге, Вас забанили. Пожалуйста, напишите нам в поддержку @arbeit_bot_support, если произошла какая-то ошибка — разберемся 👍',
  loadingMessage: '🦄 Загрузка...',
  askForUsername: 'Похоже, у Вас еще нет юзернейма в Телеграме. Пожалуйста, зайдите в настройки Телеграма и установите себе юзернейм. Спасибо!',
  deprecatedMessage: 'Это сообщение устарело. Пожалуйста, пролистайте вниз, чтобы увидеть новую версию сообщения ⤵️',
  initialMessage: 'Добро пожаловать на первую бесплатную фриланс-биржу с открытым кодом в Телеграме.\n\nЕсли вы ищете работу, пожалуйста, заполните свой "Профиль". Если вы ищете фрилансеров, пройдите в "Найти фрилансеров". Жмите "Помощь", если у вас есть какие-либо вопросы.\n\nСпасибо за то, что стали частью нашей дружной семьи!',
  mainMenuMessage: 'Выберите "Профиль", если ищете работу. Если ищете фрилансеров — выберите "Найти фрилансеров".',
  noJobsExistMessage: 'У вас еще нет созданных работ. Вы можете создать работу, нажав на "Создать работу".',
  clientMenuMessage: 'Пожалуйста, выберите пункт меню.',
  selectLanguageMessage: 'Пожалуйста, выберите, на каком языке будет работа. Мы покажем Вам только тех фрилансеров, которые умеют говорить на этом языке.',
  selectSupercategoryMessage: 'Пожалуйста, выберите категорию своей работе. Количество готовых к работе фрилансеров для каждой категории обозначено [квадратными скобками].',
  selectCategoryMessage: 'Please, select a subcategory relevant to your job. The number of available contractors is displayed between [square brackets] for each subcategory.',
  selectJobHourlyRateMessage: 'Please, select how much you would like to pay. The price is given in USD/hour to identify the skill levels of developers. You can negotiate a fixed price with the contractor later on. The number of available contractors is displayed between [square brackets] for each rate range.',
  addJobDescriptionMessage: 'Please, provide a job description (100-500 chars). It will be visible to contractors. Please, be brief – the details can be discussed with the contractors later on.',
  jobDescriptionErrorMessage: 'Please make sure that your job description is between 100 and 500 chars.',
  bioErrorMessage: 'Please make sure that your bio fits in 150 chars.',
  addJobDescriptionHideKeyboardMessage: 'You can cancel at any time at job creation message.',
  addBioHideKeyboardMessage: 'You can cancel at any time.',
  filledEverythingMessage: 'You did it! Your profile is now complete. Now just sit back and wait for job offers.',
  fullFreelancerMessageAvailable: 'Your profile is complete! Now just sit back and wait for job offers.',
  fullFreelancerMessageBusy: 'Your profile is complete! However, clients will not contact you since your status is "Busy".',
  emptyFreelancerMessage: 'Welcome to your freelancer profile! Please, fill out your bio, select your hourly rate and categories of expertise.',
  missingFreelancerMessage: 'Welcome to your freelancer profile! You need both to fill out your bio and select your hourly rate and categories of expertise so that clients can see you.',
  helpMessage: 'If you want to learn more about this bot, please go to arbeitbot.com.\n\nIf you have any questions, concerns or just found a bug, please contact us at @arbeit_bot_support.\n\nIf you would like to learn how this bot works, please click the relevant button below.\n\nIn case you want to see the code of @arbeit_bot on GitHub, please follow the link provided below. We would appreciate if you could star our repository as well.\n\nThank you a lot for your support!',
  becameBusyMessage: 'You just set your status to "Busy". You will not receive any new job offers until you switch back to "Available".',
  becameAvailableMessage: 'You just switched to "Available" status. You will now receive relevant job offers until you switch back to "Busy".',
  missingBecameBusyMessage: 'You just changed your status to "Busy". But this doesn\'t make much difference since clients will not be able to find you without properly filled bio, categories and hourly rate.',
  missingBecameAvailableMessage: 'You just changed to "Available" status.  But this doesn\'t make much difference since clients will not be able to find you without properly filled bio, categories and hourly rate.',
  jobCreationSuccessMessage: 'Success! A new job has been created, we have sent it to you below ⤵️',
  pickFreelancersMessage: 'Please, select which contractors should receive job offers from you.',
  editBioMessage: 'Please, enter your bio (max 150 chars). Keep it brief but descriptive – the clients will see it beside your rating. Feel free to add a link to your personal website.',
  selectCandidateMessage: 'Please, select the candidate that you liked the most.',
  changedBioMessage: 'Congrats! Your new bio is:\n\n',
  notChangedBioMessage: 'Your bio not changed.\n\n',
  yourCurrentBio: 'Your current bio:',
  editHourlyRateMessage: 'What is your hourly rate? You will only receive job offers of relevant hourly rate.',
  editLanguageMessage: 'What languages do you speak? You will only receive job offers of selected languages.',
  editInterfaceLanguageMessage: 'Please select your language of preference. This option will only affect the user interface of the bot. It will not affect your ability to receive or post job offers.',
  pickCategoriesMessage: 'Please, select your skills. You will only receive job offers in categories you select.',
  suggestCategoryMessage: 'Suggest your own category',
  waitContractorResponseMessage: 'You sent an offer to one of the freelancers. Please, wait until the freelancer accepts or rejects your offer, or simply select another freelancer if you do not want to wait anymore.',
  acceptOrRejectMessage: 'Congrats! You received a job offer! Please, accept or reject it.',
  freelancerInterestedNotification: ' became interested in ',
  contactWithFreelancerMessage: 'Wonderful! The contractor has accepted your offer! Please, contact them directly, and rate your contractor after the job is done.',
  contactWithClientMessage: 'Great! You have accepted this offer. Now please communicate with the client directly, and rate your experience as soon as you finish the job.',
  rateFreelancerMessage: 'The only thing left is to rate your contractor. How well was the job done?',
  rateClientMessage: 'The only thing left is to rate your client. How good was your experience with this client?',
  reviewFreelancerMessage: 'reviewFreelancerMessage',
  reviewClientMessage: 'reviewClientMessage',
  thanksReviewMessage: 'Thanks for the review!',
  youWereRated: 'You have received a new rating from ',
  clientHasChosenAnotherFreelancer: 'The client has chosen another freelancer.',
  noCandidatesMessage: 'There are no available candidates right now 😥 Please, check back later or create a new job.',
  thisWorkIsRemoved: 'This job has been deleted ✌️',
  thisDraftIsRemoved: 'This job draft has been deleted ✌️',
  shareProfile: 'Share profile',
  mainMenuOptions: {
    findJobs: '👤 Профиль',
    findContractors: '⛑ Найти фрилансеров',
    help: '❔ Помощь',
    chooseLanguage: '📣 Сменить язык',
  },
  clientMenuOptions: {
    postNewJob: '🔨 Создать работу',
    myJobs: '🛠 Созданные работы',
    back: '🔙 Назад',
  },
  changeTo: 'Сменить на: ',
  back: '🔙 Назад',
  freelanceMenuOptions: {
    editBio: '🖊 Редактировать био',
    addBio: '🖊 Добавить био',
    editCategories: '📌 Редактировать категории',
    addCategories: '📌 Добавить категории',
    editHourlyRate: '💲 Редактировать часовую ставку',
    addHourlyRate: '💲 Добавить часовую ставку',
    back: '🔙 Назад',
    busy: '⚒ Заняты',
    available: '✅ Доступны',
    addLanguage: '🇺🇸 Добавить язык',
  },
  hourlyRateOptions: [
    '$0 – $5', '$5 – $10', '$10 – $20',
    '$20 – $30', '$30 – $40', '$40 – $50',
    '$50 – $75', '$75 – $100', '$100 – $200',
    '$200+',
  ],
  hourlyRateAllRatesOption: 'All hourly rates',
  selectedCategory: '✅ ',
  selectedHourlyRate: '✅ ',
  selectedLanguage: '✅ ',
  categoryLeft: '<',
  categoryRight: '>',
  inlineSeparator: '~',
  categoryInline: 'cI',
  hourlyRateInline: 'hRI',
  interfaceLanguageInline: 'iLanI',
  languageInline: 'lanI',
  adminBanInline: 'abI',
  freelancerInline: 'fI',
  freelancerPageInline: 'fPI',
  jobManageInline: 'jMI',
  freelancerJobInline: 'fJI',
  freelancerJobEditInline: 'fJEI',
  selectFreelancerInline: 'sFI',
  selectAnotherFreelancerInline: 'sAFI',
  freelancerAcceptInline: 'fAI',
  askRateClientInline: 'aRCI',
  askRateFreelancerInline: 'aRFI',
  rateClientInline: 'rCI',
  rateFreelancerInline: 'rFI',
  completeJobInline: 'cJI',
  reportJobInline: 'rpJI',
  reportFreelancerInline: 'rpFI',
  reportClientInline: 'rpCI',
  cancelJobCreationInline: 'cJCI',
  categoryBackInline: 'cBaI',
  supercategoryBackInline: 'sCBaI',
  hourlyRateBackInline: 'hRBaI',
  cancelBioEnterInline: 'cBEI',
  inputLanguageInline: 'iLI',
  inputSupercategoryNameInline: 'iSCNI',
  inputCategoryNameInline: 'iCNI',
  inputHourlyRateInline: 'iHRI',
  inputJobDescriptionInline: 'iJDI',
  inputBioCancelInline: 'iBCI',
  unsubscripeFromGodvoiceInline: 'uFGI',
  hideButtonsGodvoiceInline: 'hBGI',
  resubscribeGodvoiceInline: 'rGVI',
  showBioInline: 'sBI',
  jobCreationState: 'jobCreationState',
  inputBioState: 'inputBioState',
  inputLanguageState: 'inputLanguageState',
  inputCategoryNameState: 'inputCategoryNameState',
  inputHourlyRateState: 'inputHourlyRateState',
  inputJobDescriptionState: 'inputJobDescriptionState',
  inputReportMessage: 'inputReportMessage',
  cancel: '❌ Cancel',
  jobCreateCancel: '❌ Cancel',
  selectFreelancerCancel: '❌ Cancel',
  jobSendAllFreelancers: 'Send to all',
  jobRefresh: 'Refresh',
  jobDelete: 'Delete',
  jobEdit: 'Edit',
  jobSelectFreelancer: 'Select contractor',
  jobSelectAnotherFreelancer: 'Select another contractor',
  jobBackPage: '<',
  jobNextPage: '>',
  interestedOption: '✅',
  notInterestedOption: '❌',
  acceptOption: '✅',
  refuseOption: '❌',
  pendingOption: '🕒',
  star: '⭐',
  bioReviews: 'Reviews:',
  saveReviewOption: 'saveReview',
  adminNotifications: {
    adminBanReviewInline: 'aBRI',
    adminDeleteReviewInline: 'aDRI',
    adminOkReviewInline: 'aORI',
    adminReviewDecision: 'Moderators have made a decision about the review.',
  },
  jobStates: {
    searchingForFreelancer: 'searchingForFreelancer',
    freelancerChosen: 'freelancerChosen',
    finished: 'finished',
    /** todo: need to delete this later */
    frozen: 'frozen',
    banned: 'banned',
    rated: 'rated',
    removed: 'removed',
  },
  reviewTypes: {
    byClient: 'byCl',
    byFreelancer: 'byFl',
  },
  freelancerOptions: {
    interested: 'Interested',
    notInterested: 'Not interested',
    report: '❗️ Report',
  },
  freelancerAcceptOptions: {
    accept: '✅ Accept',
    refuse: '❌ Refuse',
  },
  jobFinishedOptions: {
    rate: '⭐ Rate',
    report: '❗️ Report',
  },
  report: {
    thanks: 'Thanks you for your alertness!',
    reason: 'What is the report reason?',
  },
  rateOptions: {
    back: '🔙 Back',
    oneStar: '⭐',
    twoStars: '⭐⭐',
    threeStars: '⭐⭐⭐',
    fourStars: '⭐⭐⭐⭐',
    fiveStars: '⭐⭐⭐⭐⭐',
  },
  rateOptionsArray: [
    '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐',
  ],
  shouldUpdateJobMessage: 'shouldUpdateJobMessage',
  shouldUpdateFreelancerMessage: 'shouldUpdateFreelancerMessage',
  shouldMakeInterested: 'shouldMakeInterested',
  newReview: 'newReview',
};

/**
 * Function to get the right language file
 * @param {Mongoose:User} user User that requests file
 * @return {Object[String:String]} Object containing localization strings
 */
function locale(user) {
  if (!user || !user.interfaceLanguage || String(user.interfaceLanguage._id) === englishObjectId || String(user.interfaceLanguage) === englishObjectId) {
    return english;
  } else {
    return russian;
  }
}

/** Exports */
module.exports = locale;