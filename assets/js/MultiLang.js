
        //language data... could come from an external js/json file
        let langdata = {
            "languages": {
                "en": {
                    "strings": {
                        "about": "About",
                        "partner": "Partners",
                        "pricing": "Pricing",
                        "faq": "F&Q",
                        "contact": "Contact",
                        "title": "Who are We",
                        "aqar": "Aqar Tv Channel",
                        "subtitle": "Aqar, the first satellite channel specialized in the field of real estate and urban development in Sudan.Aqar is one of the leading channels at the Arab and African levels in this field. Aqar Tv Channel is the first real estate advertising channel in Sudan.Aqar Real Estate Channel offers a wide range of real estate, services and high quality products covering the field of Real estate, construction and infrastructure, interior designs and everything related to real estate for more than 170 million viewers.",
                        "Commercial": "Commercial ads",
                        "industry": "content marketing industry",
                        "Social": "Social Media marketing",
                        "Artistic": "Artistic and advertising production",
                        "contact_title": "Contact Us",
                        "contact_subtitle": "Get in touch",
                        "contact_pragh": "You are important to us and we are continuously improving our services to serve you better.",
                        "form_title": "Don't Hesitate to Contact us",
                        "form_subtitle": "We will respond within 24 hours",
                        "form_btn": "Send Message"
                    }
                },
                "ar": {
                    "strings": {
                        "about": "من نحن",
                        "partner": "الشركاء",
                        "pricing": "التسعير",
                        "faq": "الاسئلة الشائعة",
                        "contact": "تواصل معنا",
                        "title": "من نحن",
                        "aqar": "قناة عقار الفضائية",
                        "subtitle": "عقار هي القناة الفضائية الأولى المتخصصة في مجال التطوير العقاري والعمراني في السودان ، وتعد قناة عقار من القنوات الرائدة على المستويين العربي والإفريقي في هذا المجال. قناة عقار تي في هي أول قناة إعلانية عقارية في السودان ، تقدم قناة عقار العقارية مجموعة واسعة من العقارات والخدمات والمنتجات عالية الجودة التي تغطي مجال العقارات والبناء والبنية التحتية والتصميمات الداخلية وكل ما يتعلق بالعقار. أكثر من 170 مليون مشاهد.",
                        "Commercial": "الإعلانات التجارية",
                        "industry": "صناعة تسويق المحتوى",
                        "Social": "تسويق وسائل الاعلام الاجتماعية",
                        "Artistic": "الإنتاج الفني والإعلاني", 
                        "contact_title": "تواصل معنا",
                        "contact_subtitle": "كن على تواصل دائم",
                        "contact_pragh": "أنت مهم بالنسبة لنا ونحن نعمل باستمرار على تحسين خدماتنا لخدمتك بشكل أفضل",
                        "form_title": "لا تتردد في الاتصال بنا",
                        "form_subtitle": "سنرد خلال 24 ساعة",                        
                        "form_btn": "ارسل الرسالة"
                    }
                }
            }
        }

        //apply the language values to the content
        const toggleLang = () => {
            //skip the lang value in the HTML tag for this example
            let zones = document.querySelectorAll('html [lang]');
            applyStrings(zones);

            let lang = findLocaleMatch();
        };
        document.addEventListener('DOMContentLoaded',toggleLang() )

        function applyStrings(containers) {
            containers.forEach(container => {
                //find all the elements that have data-key
                let locale = container.getAttribute('lang');
                //console.log('looking inside of ', locale);
                container.querySelectorAll(`[data-key]`).forEach(element => {
                    let key = element.getAttribute('data-key');
                    //console.log(element);
                    //console.log(key);
                    let lang = locale.substr(0, 2); //first 2 characters
                    if (key) {
                        element.textContent = langdata.languages[lang].strings[key];
                    }
                });
            })
        }

        function findLocaleMatch() {
            let keys = Object.keys(langdata.languages); //from our data
            let locales = Intl.getCanonicalLocales(keys); //from our data validated

            let lang = navigator.language; //from browser 
            let locale = Intl.getCanonicalLocales(lang); //from browser validated
            console.log('browser language', lang);
            console.log('locales from data file', locale);

            //find the match for locale inside locales
            let langMatch = document.documentElement.getAttribute('lang'); //default
            locales = locales.filter(l => locale == l);
            langMatch = (locales.length > 0) ? locales[0] : langMatch;
            return langMatch;
        }
        function changeLang() {
            const lang = document.getElementById('lang').getAttribute("lang");
            if (lang=="en"){
                document.getElementById('lang').setAttribute('lang','ar');
                document.getElementById('changLang').innerHTML = '<i class="icofont-earth"> en</i>'
                const dir = document.querySelectorAll(".dir")
                dir.forEach((el)=>{
                    el.setAttribute("dir","rtl")
                })
                toggleLang()
            }else{
                document.getElementById('lang').setAttribute('lang','en');
                document.getElementById('changLang').innerHTML = '<i class="icofont-earth"> ar</i>'
                const dir = document.querySelectorAll(".dir")
                dir.forEach((el)=>{
                    el.setAttribute("dir","ltr")
                })
                toggleLang()
            }
            
        }
        function changeTheme(){
            const theme = document.getElementById('changeTheme')
            const icon = document.getElementById('themeIcon')
            const logo = document.getElementById('logo')
            if (theme.getAttribute("class")!="main-dark-verson"){
                theme.classList.add("main-dark-verson")
                icon.setAttribute("class","icofont-sun")
                logo.setAttribute("src","assets/img/logo2.png")
            }else{
                theme.classList.remove("main-dark-verson")
                icon.setAttribute("class","icofont-moon")
                logo.setAttribute("src","assets/img/logo.png")
            }
        }
