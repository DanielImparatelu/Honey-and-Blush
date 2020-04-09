function readJson(){
    var jsonData = {"faq" : [
        {
            "q" : "What are hair extensions?", 
            "a" : "Hair extensions are a means of adding on to your natural hair. There are many methods of application"
        }, 
        {
            "q" : "Why do people have hair extensions?", 
            "a" : "Hair extensions are applied to enhance the appearance of your natural hair. They can be used to add any combination of length, thickness, body and colour"
        }, 
        {
            "q" : "Can anybody have hair extensions applied?", 
            "a" : "There are some scalp conditions which are unfortunately not compatible with hair extensions, such as psoriazis, eczema, etc. However, the severity of these conditions vary greatly from individual to individual and can be assesed at your consultation"
        }, 
        {
            "q" : "How long does my natural hair have to be?", 
            "a" : "This very much depends on your own hair type, but ideally your own hair should be a minimum of 10cm long"
        }, 
        {
            "q" : "Do you charge for consultations?",
            "a" : "No. Honey and Blush do not charge for consuultations, even though consultations are very thorough, and can take up a 1/2 hour time slot, there is no charge."
        }, 
        {
            "q" : "Is there anything I need to do prior to the consultation?", 
            "a" : "To help get a clear indication of your hairs condition and type, it is important that your hair is freshly washed, dried and straightened on the day of your consultation. It is also recommended that if you plan to change the colour of your hair you do so prior to the consultation."
        }, 
        {
            "q" : "What can I expect at a consultation?", 
            "a" : "The consultation gives you the opportunity to ask any questions you might have, and to discuss what you hope to achieve from your hair extensions. A lot of questions will be asked about your hair type and lifestyle, and depending on your answers we will discuss your individual aftercare regime."
        }, 
        {
            "q" : "What are nano-tip hair extensions?", 
            "a" : "The nano ring is the smallest and innovative way to apply hair extensions currently on the market. These extensions are very comfortable, and the rings are so tiny, they are almost impossible to detect even when wearing your hair up in a ponytail."
        }, 
        {
            "q" : "How are your nano-tip hair extensions applied?", 
            "a" : "The tiny nano ring is applied to a small section of your natural hair and a nano tip hair extension is inserted into the nano ring and clamped shut"
        }, 
        {
            "q" : "How long does the application take?", 
            "a" : "This varies greatly from client to client, ranging between 2-5 hours."
        }, 
        {
            "q" : "Do hair extensions damage your hair?", 
            "a" : "No, hair extensions will not cause any damage to your natural hair, as long as they are installed correctly by a qualified hair extension specialist."
        }, 
        {
            "q" : "Can I use heated styling appliances on my hair?", 
            "a" : "Yes, you can use hairdryers, straighteners, wands, etc. just like you would on your own hair, but please bear in mind the longevity and quality of hair will decrease dramatically if these appliances are used excessively."
        }
    ]};
    
    for(let i = 0; i <= jsonData["faq"].length; i++){
        $('.faq-wrapper .wrapper').append('<div class = "row-wrapper paragraph-wrapper row "> <div class = "col-xs-12"> <div class="header-text-wrapper"><h3 class = "subtitle-header align">' + 
        jsonData["faq"][i].q.toString()+'</h3> </div> <p class = "sentence-text align">' + 
        jsonData["faq"][i].a.toString()+'</p>  </div></div>');
    }
}

$(document).ready(function(){
  readJson();
});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var jsonData = JSON.parse(rawFile);
                console.log(allText);
                console.log(jsonData);
            }
        }
    }
    rawFile.send(null);
}




// {"faq" :[
//     {"questions":[
//         {"1" : "What are hair extensions?"}, 
//         {"2" : "Why do people have hair extensions?"}, 
//         {"3" : "Can anybody have hair extensions applied?"},
//         {"4" : "How long does my natural hair have to be?"}, 
//         {"5" : "Do you charge for consultations?"}, 
//         {"6" : "Is there anything I need to do prior to the consultation?"}, 
//         {"7" : "What can I expect at a consultation?"}, 
//         {"8" : "What are nano-tip hair extensions?"}, 
//         {"9" : "How are your nano-tip hair extensions applied?"}, 
//         {"10" : "How long does the application take?"}, 
//         {"11" : "Do hair extensions damage your hair?"},
//         {"12" : "Can I use heated styling appliances on my hair?"}
//     ]},

//     {"answers": [
//         {"1" : "Hair extensions are a means of adding on to your natural hair. There are many methods of application"}, 
//         {"2" : "Hair extensions are applied to enhance the appearance of your natural hair. They can be used to add any combination of length, thickness, body and colour"}, 
//         {"3" : "There are some scalp conditions which are unfortunately not compatible with hair extensions, such as psoriazis, eczema, etc. However, the severity of these conditions vary greatly from individual to individual and can be assesed at your consultation"},
//         {"4" : "This very much depends on your own hair type, but ideally your own hair should be a minimum of 10cm long"}, 
//         {"5" : "No. Honey and Blush do not charge for consuultations, even though consultations are very thorough, and can take uo a 1/2 hour time slot, there is no charge."}, 
//         {"6" : "To help get a clear indication of your hairs condition and type, it is important that your hair is freshly washed, dried and straightened on the day of your consultation. It is also recommended that if you plan to change the colour of your hair you do so prior to the consultation."}, 
//         {"7" : "The consultation gives you the opportunity to ask any questions you might have, and to discuss what you hope to achieve from your hair extensions. A lot of questions will be asked about your hair type and lifestyle, and depending on your answers we will discuss your individual aftercare regime."}, 
//         {"8" : "The nano ring is the smallest and innovative way to apply hair extensions currently on the market. These extensions are very comfortable, and the rings are so tiny, they are almost impossible to detect even when wearing your hair up in a ponytail."}, 
//         {"9" : "The tiny nano ring is applied to a small section of your natural hair and a nano tip hair extension is inserted into the nano ring and clamped shut"}, 
//         {"10" : "This varies greatly from client to client, ranging between 2-5 hours."}, 
//         {"11" : "No, hair extensions will not cause any damage to your natural hair, as long as they are installed correctly by a qualified hair extension specialist."},
//         {"12" : "Yes, you can use hairdryers, straighteners, wands, etc. just like you would on your own hair, but please bear in mind the longevity and quality of hair will decrease dramatically if these appliances are used excessively."}
//     ]}
// ]}