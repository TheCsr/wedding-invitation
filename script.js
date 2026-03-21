const translations = {
    en: {
        topLabel: "The Wedding of",
        heroTitle: "Save the Date",
        heroDesc: "We request the honor of your presence as we begin our life together.",
        itineraryTitle: "Wedding Itinerary",
        event1Title: "Haldi & Mehendi",
        event1Date: "April 28 (Baisakh 15 BS)",
        event1Loc: "At Our Own Residence",
        event2Title: "The Wedding Ceremony",
        event2Date: "April 30 (Baisakh 17 BS)",
        event2Loc: "Hotel Sita Palace, Sarlahi, Nepal",
        event3Title: "Grand Reception",
        event3Date: "May 02 (Baisakh 19 BS)",
        event3Loc: "Vishuwa Hotel, Birgunj, Nepal",
        rsvpTitle: "Kindly Respond",
        labelName: "Your Name",
        inputName: "Full Name",
        labelWedding: "Will you attend the Wedding?",
        labelReception: "Will you attend the Reception?",
        labelBarat: "Will you join the Barat?",
        labelBaratCount: "How many people for the Barat?",
        inputCount: "Number of guests",
        optYes: "Yes",
        optNo: "No",
        submitBtn: "Send My Response"
    },
    ne: {
        topLabel: "शुभ विवाह",
        heroTitle: "मिति सुरक्षित गर्नुहोस्",
        heroDesc: "हाम्रो नयाँ जीवनको सुरुवातमा तपाईंको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा गर्दछौं।",
        itineraryTitle: "विवाह कार्यक्रम",
        event1Title: "हल्दी र मेहेन्दी",
        event1Date: "बैशाख १५ (अप्रिल २८)",
        event1Loc: "हाम्रो आफ्नै निवासमा",
        event2Title: "शुभ विवाह समारोह",
        event2Date: "बैशाख १७ (अप्रिल ३०)",
        event2Loc: "होटल सीता प्यालेस, सर्लाही, नेपाल",
        event3Title: "प्रीतिभोज (रिसेप्सन)",
        event3Date: "बैशाख १९ (मे ०२)",
        event3Loc: "विशुवा होटल, वीरगन्ज, नेपाल",
        rsvpTitle: "कृपया जानकारी दिनुहोला",
        labelName: "तपाईंको नाम",
        inputName: "पूरा नाम",
        labelWedding: "के तपाईं विवाहमा आउनुहुन्छ?",
        labelReception: "के तपाईं रिसेप्सनमा आउनुहुन्छ?",
        labelBarat: "के तपाईं जन्ती जानुहुन्छ?",
        labelBaratCount: "जन्तीको लागि कति जना आउनुहुन्छ?",
        inputCount: "पाहुनाहरूको संख्या",
        optYes: "हजुर, आउँछु",
        optNo: "आउन पाउँदिन",
        submitBtn: "जवाफ पठाउनुहोस्"
    }
};

function changeLanguage(lang) {
    const t = translations[lang];
    
    document.getElementById('topLabel').innerText = t.topLabel;
    document.getElementById('heroTitle').innerText = t.heroTitle;
    document.getElementById('heroDesc').innerText = t.heroDesc;
    document.getElementById('itineraryTitle').innerText = t.itineraryTitle;
    
    document.getElementById('event1Title').innerText = t.event1Title;
    document.getElementById('event1Date').innerText = t.event1Date;
    document.getElementById('event1Loc').innerText = t.event1Loc;
    
    document.getElementById('event2Title').innerText = t.event2Title;
    document.getElementById('event2Date').innerText = t.event2Date;
    document.getElementById('event2Loc').innerText = t.event2Loc;
    
    document.getElementById('event3Title').innerText = t.event3Title;
    document.getElementById('event3Date').innerText = t.event3Date;
    document.getElementById('event3Loc').innerText = t.event3Loc;
    
    document.getElementById('rsvpTitle').innerText = t.rsvpTitle;
    document.getElementById('labelName').innerText = t.labelName;
    document.getElementById('inputName').placeholder = t.inputName;
    
    document.getElementById('labelWedding').innerText = t.labelWedding;
    document.getElementById('labelReception').innerText = t.labelReception;
    document.getElementById('labelBarat').innerText = t.labelBarat;
    document.getElementById('labelBaratCount').innerText = t.labelBaratCount;
    document.getElementById('inputCount').placeholder = t.inputCount;

    // Fix Options
    document.getElementById('optYes1').innerText = t.optYes;
    document.getElementById('optYes2').innerText = t.optYes;
    document.getElementById('optYes3').innerText = t.optYes;
    document.getElementById('optNo1').innerText = t.optNo;
    document.getElementById('optNo2').innerText = t.optNo;
    document.getElementById('optNo3').innerText = t.optNo;
    
    document.getElementById('submitBtn').innerText = t.submitBtn;

    // Set attribute for styling
    document.body.setAttribute('lang', lang);
}

// Keep your existing form submission logic here
document.getElementById('weddingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'celebration.html';
});