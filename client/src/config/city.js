const cityArr =[
        {
            cityname: "New Delhi",
            state: "Delhi",
            famous_places: [
                {
                    place_name: "Red Fort",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/9/96/Delhi_Red_fort.jpg",
                    description: "The Red Fort or Lal Qila is a historic fort in the Old Delhi neighbourhood of Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi",
                    url: "https://www.google.com/search?q=redfort&rlz=1C1UEAD_enIN990IN990&oq=redfort&aqs=chrome..69i57j0i512j0i10i512j46i10i175i199i512l2j0i10i512l3j0i512j0i10i512.2597j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzXRUtHZcfu23knWvmrS1n_twfVcLg:1678910156314&rflfq=1&num=10&rldimm=15367812579894660845&lqi=CgdyZWRmb3J0SOT91OGhsoCACFoNEAAYACIHcmVkZm9ydJIBEmludmVzdG1lbnRfY29tcGFueaoBIhABMh4QASIaoggRdJ8CXqK-jxG_dEnGgb6PldigqsUJ8tY&ved=2ahUKEwjEgOjb2979AhUz7XMBHS6XDeYQvS56BAgUEAE&sa=X&rlst=f#rlfi=hd:;si:4908416671633375995,l,CgdyZWRmb3J0SJru5wJaDRAAGAAiB3JlZGZvcnSSAQhmb3J0cmVzc5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSbGExazNha0pCRUFFqgEiEAEyHhABIhqiCBF0nwJeor6PEb90ScaBvo-V2KCqxQny1g;mv:[[29.2560947,77.5035997],[18.0572993,72.60211799999999]]"
                },
                {
                    place_name: "Lotus Temple",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Lotus_temple_daytime.jpg",
                    description: "The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its lotus like shape, it has become a prominent attraction in the city.",
                    url : "https://www.google.com/search?q=lotus+temple&rlz=1C1UEAD_enIN990IN990&tbm=lcl&sxsrf=AJOqlzUP-ydk_LCBIJQYayyv3VMt-Ebj_g%3A1678910179916&ei=4yISZOPHN4zzz7sPo-Gm6A4&ved=0ahUKEwijxYjn2979AhWM-XMBHaOwCe0Q4dUDCAk&uact=5&oq=lotus+temple&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCAgAEIAEELEDMgoIABCABBACEMsBMgUIABCABDIKCAAQgAQQAhDLAToHCCMQ6gIQJzoECCMQJzoLCAAQgAQQsQMQgwE6BAgAEEM6CAgAELEDEIMBOgUIABCRAjoICAAQgAQQyQM6BQgAEJIDULMGWOQUYI8baAFwAHgAgAGBAYgBxwqSAQQwLjEymAEAoAEBsAEKwAEB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[28.556185852996688,77.26618599447329],[28.550352445853846,77.25421261343081]]"
                }
            ]
        },
        {
            cityname: "Mumbai",
            state: "Maharashtra",
            famous_places: [
                {
                    place_name: "Gateway of India",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg",
                    description: "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain.",
                    url : "https://www.google.com/search?q=gateway+of+india&rlz=1C1UEAD_enIN990IN990&tbm=lcl&sxsrf=AJOqlzUCIcOBXOuHto6svSGyROxF5bs5_w%3A1678910221724&ei=DSMSZPPtK6Ko3LUP1tSd0A4&ved=0ahUKEwizqID72979AhUiFLcAHVZqB-oQ4dUDCAk&uact=5&oq=gateway+of+india&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBwgAELEDEEMyBAgAEEMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIICAAQgAQQsQM6BAgjECc6CwgAEIAEELEDEIMBOgoIABCxAxCDARBDOggIABCxAxCDAToKCAAQgAQQAhDLAVDrCViQIGDxIWgAcAB4AIABpgGIAdQPkgEEMC4xN5gBAKABAcABAQ&sclient=gws-wiz-local"
                },
                {
                    place_name: "Chhatrapati Shivaji Terminus",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Chatrapati_Shivaji_Maharaj_Terminus_Morning_Glory.jpg",
                    description: "Chhatrapati Shivaji Maharaj Terminus, is a historic railway terminus and UNESCO World Heritage Site in Mumbai, Maharashtra, India. The terminus was designed by a British born architectural engineer Frederick William Stevens from an initial design by Axel Haig, in an exuberant Italian Gothic style.",
                    url: "https://www.google.com/search?q=chhatrapati+shivaji+maharaj+terminus&rlz=1C1UEAD_enIN990IN990&tbm=lcl&sxsrf=AJOqlzWicEmRxbMDPISdNv4_0q9Cn8qUFQ%3A1678910279451&ei=RyMSZNmZG7OP8QPawZXYDg&oq=chhatra&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMYADIHCAAQsQMQQzIECAAQQzILCAAQgAQQsQMQgwEyBwgAELEDEEMyBQgAEIAEMggIABCxAxCDATIFCAAQgAQyCggAEIAEEAIQywEyCwgAEIAEELEDEIMBMgoIABCABBACEMsBOgcIIxDqAhAnOgQIIxAnOgoIABCxAxCDARBDOgUIABCxA1DFFljtImDsLmgBcAB4AIABgAGIAc4GkgEDMC43mAEAoAEBsAEKwAEB&sclient=gws-wiz-local"
                }
            ]
        },
        {
            cityname: "Jaipur",
            state: "Rajasthan",
            famous_places: [
                {
                    place_name: "Hawa Mahal",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/6/65/20191218_Hawa_Mahal_%28The_Palace_of_Winds%29_in_Jaipur%2C_1150_9148.jpg",
                    description: "The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers",
                    url: "https://www.google.com/search?q=hawa+mahal&rlz=1C1UEAD_enIN990IN990&tbm=lcl&sxsrf=AJOqlzURb3C9ejjh_L_Pkgpbqb1kDLn7yQ%3A1678910315773&ei=ayMSZNrvLqLmz7sPkY6p2A4&ved=0ahUKEwia0eyn3N79AhUi83MBHRFHCusQ4dUDCAk&uact=5&oq=hawa+mahal&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBwgAELEDEEMyCAgAEIAEELEDMgUIABCABDIKCAAQgAQQAhDLATIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgoIABCABBACEMsBOgcIIxDqAhAnOgQIIxAnOgQIABBDOgUIABCxA1CeBlj8EWCvFGgBcAB4AIABnQGIAZMJkgEEMC4xMJgBAKABAbABCsABAQ&sclient=gws-wiz-local#rlfi=hd:;si:9659760862336692748,l,CgpoYXdhIG1haGFsSMu9ogNaHBAAEAEYABgBIgpoYXdhIG1haGFsKgYIAhAAEAGSAQZjYXN0bGWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlBiM1JsUjNkM1JSQUI;mv:[[29.357554511681496,79.638999659375],[23.86843088149809,67.37825747187502]]"
                },
                {
                    place_name: "Amber Fort",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Amber_Palace_on_Hill%2C_Amber_Jaipur.JPG",
                    description: "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres located 11 kilometres from Jaipur, the capital of Rajasthan.",
                    url :"https://www.google.com/search?q=amber+fort&rlz=1C1UEAD_enIN990IN990&tbm=lcl&sxsrf=AJOqlzXJ43v-F9LN_xvdTxhntUxV4rH8vA%3A1678910370423&ei=oiMSZK7EGZTdz7sPp8-K2A4&ved=0ahUKEwiunfTB3N79AhWU7nMBHaenAusQ4dUDCAk&uact=5&oq=amber+fort&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBwgAELEDEEMyCggAEIAEEBQQhwIyBwgAELEDEEMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CAgAEIAEELEDOgoIABCABBACEMsBOgsIABCABBCxAxCDAToQCAAQgAQQFBCHAhCxAxCDAToKCAAQsQMQgwEQQzoHCAAQgAQQCjoICAAQgAQQyQNQkAdYlh1g1B5oAXAAeACAAbEBiAGYC5IBBDAuMTKYAQCgAQHAAQE&sclient=gws-wiz-local#rlfi=hd:;si:7071178524615540267,l,CgphbWJlciBmb3J0SMOGgwRaHBAAEAEYABgBIgphbWJlciBmb3J0KgYIAhAAEAGSAQZjYXN0bGWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnpiMHR4YnpCQlJSQUKqASIQATIeEAEiGuehHrA4-OuQ9b6Bixd1jlDFabuFOl24Smpc,y,KVlQEMnDRCQ;mv:[[27.4984361,75.98875389999999],[18.088519800000004,73.6046114]] "
                }
            ]
        }
]
export default cityArr;
