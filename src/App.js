import Widget from "./components/Widget";
import QA from "./components/QA";
import PromotedProducts from "./components/PromotedProducts";
import ReviewsCarousel from "./components/ReviewsCarousel";
import SEO from "./components/SEO";
import ReviewsTab from "./components/ReviewsTab";
import StarRating from "./components/StarRating";
import UgcGallery from "./components/UgcGallery";


function App() {
  //Instance ID a
  let InstanceId_Widget = "771392";  
  let InstanceId_QA = "777252";
  let InstanceId_SEO = "";
  let InstanceId_Carousel = "";
  let InstanceId_StarRating = "775791";
  let InstanceId_PromotedProd = "";
  let InstanceId_UgcGallery = ""; 
  let InstanceId_ReviewsTab = "";

  //Product ID 10263{"ro":{"widget":{"you":"Tu","me":"Eu","vote_yes":"Da","vote_no":"Nu","default_title":"Scrie titlul review-ului tău aici!","default_review":"Scrie review-ul tău aici!","default_name":"Introdu numele tău","default_email":"Introdu adresa de email","post":"Postează","required_fields":"Câmpuri obligatorii","sort":"Sortează","sort_choose":"Alege o modalitate de sortare","sort_newest":"Cel mai nou","sort_oldest":"Cel mai vechi","sort_best":"Cel mai bun","sort_highest_rating":"Cel mai mare rating","sort_lowest_rating":"Cel mai mic rating","sort_high_votes":"Cel mai votat","sort_low_votes":"Cel mai puțin votat","sort_with_images":"cu imagini","all":"Toate","select":"Selectează","powered_by":"Powered by YOTPO","powered_by_yotpo":"Powered by YOTPO","sign_in":"Autentificare","sign_in_to_post":"Loghează-te pentru a posta","sign_out":"Delogare","helpful":"A fost util acest review?","helpful_answer":"A fost acest răspuns de ajutor?","loading":"Se încarcă...","load_more":"Încarcă mai mult","load_more_alt_text":"Adaugă mai multe imagini","title_error":"Titlul review-ului lipsește","review_error":"Conținutul review-ului lipsește","question_error":"Lipsește conținutul întrebării","review_error_too_long":"Review-ul tău este prea lung","question_error_too_long":"Întrebarea ta este prea lungă","1st":"1<sup>ul</sup>","2st":"2<sup>lea</sup>","3st":"3<sup>lea</sup>","pending_review":"Review-ul tău a fost trimis cu succes. Pentru ca acesta să fie aprobat și publicat este nevoie de până la 72 de ore.","firstreview":"Primul review ","reviews":"Review-uri","reviews_by":"Powered by","review":"Review","required":"obligatoriu","login_line_1":"Conectează-te pentru a vedea<br>ce spun cunoștințele tale<br>despre acest produs","login_line_2":"Nu vom posta niciodată fără permisiunea ta","post_line_1":"Te rugăm să te conectezi la o rețea socială pentru a posta review-ul","post_line_2":"Nu vom posta niciodată fără permisiunea ta","or_with":"sau cu","no-login":"Te rugăm să te autentifci sau să introduci numele și adresa de email.","no-login-question":"Te rugăm să introduci numele și adresa ta de email.","email_not_valid":"Adresa de email este incorectă","no-name":"Te rugăm să introduci numele și prenumele","no-email":"Te rugăm să introduci adresa ta de email","no-score":"Introdu numărul de stele pe care îl acorzi acestui review","connect_with":"Conectează-te cu","or":"sau","email":"Email","facebook":"facebook","instagram":"Instagram","twitter":"twitter","share":"distribuie","user_your_name":"Completează numele și prenumele","login_incentive":"Te rugăm să te autentifici","thank_you_for_posting":"Îți mulțumim pentru transmiterea review-ului!","help_your_friends":"Ajută-ți prietenii să aibă o experiență plăcută la cumpărături!","be_a_friend":"Fii un bun prieten și dă \"Share\" acestui review pentru a-ți ajuta prietenii cu următoarea experiență de cumpărare.","connect_one_omre_networks":"Conectează-te la una sau mai multe rețele sociale","connect_to_social_network":"conectate la rețeaua socială.","connected_as":"Ești conectat:","share_one_omre_networks":"Distribuie pe una sau mai multe rețele de socializare","january":"Ianuarie","february":"Februarie","march":"Martie","april":"Aprilie","may":"Mai","june":"Iunie","july":"Iulie","august":"August","september":"Septembrie","october":"Octombrie","november":"Noiembrie","december":"Decembrie","verified_buyer_title":"Cumpărător verificat","verified_buyer_text":"Un client verificat este o persoană care a finalizat o comandă pe site-ul nostru.","verified_reviewer_title":"Recenzent Verificat","verified_reviewer_text":"Un cumpărător verificat este o persoană ce a înregistrat adresa de email sau s-a conectat la o rețea socială cu site-ul nostru asigurând un nivel ridicat de transparență și încredere.","rating1":"Rău","rating2":"Slab","rating3":"Normal","rating4":"Bun","rating5":"Superb","testimonials_title":"Review-uri reale <br> de la cumpărători adevărați","testimonials_site_tab":"Review-uri site","testimonials_products_tab":"Review-uri Produs","be_the_first_to_review":"Fii primul care scrie un review despre {product_name}!","no_product_reviews_on_site":"Momentan nu sunt review-uri despre produse!","on_rel":"Pe","site_review":"Scrie un review despre site","store_owner":"Proprietar Site","product_review":"Lasă un review produsului","badge_text":"review-uri reale","home_page_link":"Mergi pe Pagina Principală","answers":"Răspunsuri","questions":"Întrebări","q_and_a_s":"Q&A","q":"Q","a":"A","write-question":"Scrie întrebări legate de","write-review":"Adaugă review","ask-question":"Pune o întrebare","question-content":"Întrebare","question-connect":"Introdu detaliile tale","question-thankyou-title":"Îți mulțumim pentru întrebare!","question-thankyou-desc-confirmation":"Te rugăm să dai click pe link-ul trimis pe adresa ta de email, pentru a posta întrebarea ta.<br/></br/>","question-thankyou-desc-published":"Întrebarea ta va apărea pe site în momentul în care va fi procesată.","answer-helpful":"Folositor","first-question":"Pune o întrebare","score":"Rating","title":"Titlu","per_page":"per pagină","what_is":"ce este","comments":"comentarii (%{total_comments})","total_answers":"răspunsuri (%{total_answers})","show_more_answers":"Arată mai multe întrebări","submit":"trimite","shop_now":"Cumpără acum","buy_now":"Cumpără acum","add_to_cart":"Adaugă în coș","added_to_cart":"Adăugat în coș","item_unavilable":"Produs nedisponibil","continue_shopping":"Continuă cumpărăturile","proceed_to_checkout":"Finalizează cumpărăturile","cancel_window":"Anulează","other_tagged_products":"Alte produse etichetate","show_more_products":"ARATĂ MAI MULT","show_less_products":"ARATĂ MAI PUȚIN","based_on_reviews":"bazat pe %{total_reviews} review-uri","based_on_review":"bazat pe 1 review","read_more":"Citește mai mult","read_less":"Citește mai puțin","read_more_about":"Citește mai mult despre","read_less_about":"Citește mai puțin despre","displaying":"Afișează %{type}","yotpo_home":"Pagina principală Yotpo","user_avatar":"Imagine User","likes":"Like-uri","sold_in_the_last_month":"Vândut în ultima lună","errors":{"empty":"Câmpurile titlu & conținut nu pot fi goale","score":"Introdu numărul de stele pe care îl acorzi acestui review","display_name":"Câmpul nume nu poate fi gol","email":"Email invalid","max_length":"Lungimea maximă a fost depășită","user-already-reviewed":"Review-ul tău a fost deja trimis.","mandatory_field":"Te rugăm să completezi toate câmpurile obligatorii(*)","open_question_answer_length":"Răspunsul trebuie să conțină cel puțin %{min_length} charactere","open_question_general":"Unul sau mai multe răspunsuri nu îndeplinesc criteriile cerute"},"first":{"empty":"Momentan nu sunt %{type} pentru acest produs.","empty_dedicated_page":"Momentan nu sunt %{type}.","be_the_first_review":"Fii primul care scrie un %{type}","be_the_first_question":"Fii primul care pune o %{type}","content_type":{"review":"review","reviews":"review-uri","question":"întrebare","questions":"întrebări"}},"placeholder":{"title":"titlu","review":"review","question-content":"conținut întrebare","user_your_name":"nume și prenume","email":"email"},"syndication":{"reviewed_at":"Adăugat la"},"grouping":{"grouped_review":"Adăugat în:"},"upload_videos":{"button_title":"Adaugă","caption_modal":{"title":"Adaugă o captură","invalid_type":"Fișierele trebuie să fie în format JPG, PNG, GIF, MP4, MOV sau FLV","invalid_size":"Dimensiunea fișierului depășește 2GB"},"upload_error":"Încărcarea a eșuat. Încearcă din nou"},"upload_photos":{"button_title":"Adaugă imaginea","user_details_modal":{"title":"Spune-ne ceva despre tine","subtitle":"Nu vom afișa niciodată numele complet sau e-mailul","name_placeholder":"Nume și prenume","email_placeholder":"Adresa de email","submit":"Trimite"},"thankyou_modal":{"title":"Îți mulțumim!","title_secondary":"Ești grozav!","subtitle":"Postarea ta va apărea pe site","subtitle_secondary":"imediat ce va fi aprobată","close":"Închide"},"upload_error_modal":{"title":"Oops.","title_secondary":"Ceva nu a funcționat","subtitle":"Te rugăm să verifici conexiunea sau să încerci din nou","close":"Închide"},"caption_modal":{"title":"Adaugă o legendă imaginii tale","next_button":"Următorul","submit_button":"Trimite","add_more_button":"Adaugă mai mult","caption_placeholder":"Adaudă o imagine","invalid_type":"Fișierul trebuie să fie în format JPG, PNG, sau GIF","invalid_size":"Dimensiunea fișierului depășește 15MB","invalid_image_dimensions":"Imaginea trebuie să aibă cel puțin dimensiunea 400 x 400 px","invalid_image_file":"Ooops, nu am putut încărca imaginea ta"}},"product_bottomline":{"related_fields":{"see_more":"VEZI MAI MULT","see_less":"VEZI MAI PUȚIN"}},"filter_and_search":{"filters_container":{"header":"Filtre Review-uri","clear_all_btn_text":"Șterge tot","free_text_search_placeholder":"Caută review-uri","scores_drop_down_button_value":"Rating","images_drop_down_button_value":"Toate review-urile","images_drop_down_answer":"Review-uri cu imagini"},"more-filters":"mai multe filtre","filters":"FILTRE","clear-all":"Șterge tot","only-with-images":"Doar cu imagini","with-images-only":"Doar imagini","show":"Arată","scores_element_value":"Rating","sort_drop_down_most_relevant_value":"Cel mai relevant"},"empty_search_results":{"text":"Ne pare rău, niciun review nu corespunde criteriilor tale. Șterge sau modifică filtrele și încearcă din nou.","button_text":"Șterge toate filtrele"},"search_in_progress":{"text":"Actualizarea rezultatelor"}},"testimonials":{"reviews_by":"Review-uri de","yotpo_home":""},"star_distribution":{"show_all_reviews":"Afișează toate review-urile"},"product_fields":{"size":{"tooltip":{"small":"Dimensiune mică","fit":"Potrivită ca și dimensiune","large":"Dimensiune depășită"}}},"shoppers_say":{"more_reviews":"MAI MULTE REVIEW-URI"}}}{"ro":{"widget":{"you":"Tu","me":"Eu","vote_yes":"Da","vote_no":"Nu","default_title":"Scrie titlul review-ului tău aici!","default_review":"Scrie review-ul tău aici!","default_name":"Introdu numele tău","default_email":"Introdu adresa de email","post":"Postează","required_fields":"Câmpuri obligatorii","sort":"Sortează","sort_choose":"Alege o modalitate de sortare","sort_newest":"Cel mai nou","sort_oldest":"Cel mai vechi","sort_best":"Cel mai bun","sort_highest_rating":"Cel mai mare rating","sort_lowest_rating":"Cel mai mic rating","sort_high_votes":"Cel mai votat","sort_low_votes":"Cel mai puțin votat","sort_with_images":"cu imagini","all":"Toate","select":"Selectează","powered_by":"Powered by YOTPO","powered_by_yotpo":"Powered by YOTPO","sign_in":"Autentificare","sign_in_to_post":"Loghează-te pentru a posta","sign_out":"Delogare","helpful":"A fost util acest review?","helpful_answer":"A fost acest răspuns de ajutor?","loading":"Se încarcă...","load_more":"Încarcă mai mult","load_more_alt_text":"Adaugă mai multe imagini","title_error":"Titlul review-ului lipsește","review_error":"Conținutul review-ului lipsește","question_error":"Lipsește conținutul întrebării","review_error_too_long":"Review-ul tău este prea lung","question_error_too_long":"Întrebarea ta este prea lungă","1st":"1<sup>ul</sup>","2st":"2<sup>lea</sup>","3st":"3<sup>lea</sup>","pending_review":"Review-ul tău a fost trimis cu succes. Pentru ca acesta să fie aprobat și publicat este nevoie de până la 72 de ore.","firstreview":"Primul review ","reviews":"Review-uri","reviews_by":"Powered by","review":"Review","required":"obligatoriu","login_line_1":"Conectează-te pentru a vedea<br>ce spun cunoștințele tale<br>despre acest produs","login_line_2":"Nu vom posta niciodată fără permisiunea ta","post_line_1":"Te rugăm să te conectezi la o rețea socială pentru a posta review-ul","post_line_2":"Nu vom posta niciodată fără permisiunea ta","or_with":"sau cu","no-login":"Te rugăm să te autentifci sau să introduci numele și adresa de email.","no-login-question":"Te rugăm să introduci numele și adresa ta de email.","email_not_valid":"Adresa de email este incorectă","no-name":"Te rugăm să introduci numele și prenumele","no-email":"Te rugăm să introduci adresa ta de email","no-score":"Introdu numărul de stele pe care îl acorzi acestui review","connect_with":"Conectează-te cu","or":"sau","email":"Email","facebook":"facebook","instagram":"Instagram","twitter":"twitter","share":"distribuie","user_your_name":"Completează numele și prenumele","login_incentive":"Te rugăm să te autentifici","thank_you_for_posting":"Îți mulțumim pentru transmiterea review-ului!","help_your_friends":"Ajută-ți prietenii să aibă o experiență plăcută la cumpărături!","be_a_friend":"Fii un bun prieten și dă \"Share\" acestui review pentru a-ți ajuta prietenii cu următoarea experiență de cumpărare.","connect_one_omre_networks":"Conectează-te la una sau mai multe rețele sociale","connect_to_social_network":"conectate la rețeaua socială.","connected_as":"Ești conectat:","share_one_omre_networks":"Distribuie pe una sau mai multe rețele de socializare","january":"Ianuarie","february":"Februarie","march":"Martie","april":"Aprilie","may":"Mai","june":"Iunie","july":"Iulie","august":"August","september":"Septembrie","october":"Octombrie","november":"Noiembrie","december":"Decembrie","verified_buyer_title":"Cumpărător verificat","verified_buyer_text":"Un client verificat este o persoană care a finalizat o comandă pe site-ul nostru.","verified_reviewer_title":"Recenzent Verificat","verified_reviewer_text":"Un cumpărător verificat este o persoană ce a înregistrat adresa de email sau s-a conectat la o rețea socială cu site-ul nostru asigurând un nivel ridicat de transparență și încredere.","rating1":"Rău","rating2":"Slab","rating3":"Normal","rating4":"Bun","rating5":"Superb","testimonials_title":"Review-uri reale <br> de la cumpărători adevărați","testimonials_site_tab":"Review-uri site","testimonials_products_tab":"Review-uri Produs","be_the_first_to_review":"Fii primul care scrie un review despre {product_name}!","no_product_reviews_on_site":"Momentan nu sunt review-uri despre produse!","on_rel":"Pe","site_review":"Scrie un review despre site","store_owner":"Proprietar Site","product_review":"Lasă un review produsului","badge_text":"review-uri reale","home_page_link":"Mergi pe Pagina Principală","answers":"Răspunsuri","questions":"Întrebări","q_and_a_s":"Q&A","q":"Q","a":"A","write-question":"Scrie întrebări legate de","write-review":"Adaugă review","ask-question":"Pune o întrebare","question-content":"Întrebare","question-connect":"Introdu detaliile tale","question-thankyou-title":"Îți mulțumim pentru întrebare!","question-thankyou-desc-confirmation":"Te rugăm să dai click pe link-ul trimis pe adresa ta de email, pentru a posta întrebarea ta.<br/></br/>","question-thankyou-desc-published":"Întrebarea ta va apărea pe site în momentul în care va fi procesată.","answer-helpful":"Folositor","first-question":"Pune o întrebare","score":"Rating","title":"Titlu","per_page":"per pagină","what_is":"ce este","comments":"comentarii (%{total_comments})","total_answers":"răspunsuri (%{total_answers})","show_more_answers":"Arată mai multe întrebări","submit":"trimite","shop_now":"Cumpără acum","buy_now":"Cumpără acum","add_to_cart":"Adaugă în coș","added_to_cart":"Adăugat în coș","item_unavilable":"Produs nedisponibil","continue_shopping":"Continuă cumpărăturile","proceed_to_checkout":"Finalizează cumpărăturile","cancel_window":"Anulează","other_tagged_products":"Alte produse etichetate","show_more_products":"ARATĂ MAI MULT","show_less_products":"ARATĂ MAI PUȚIN","based_on_reviews":"bazat pe %{total_reviews} review-uri","based_on_review":"bazat pe 1 review","read_more":"Citește mai mult","read_less":"Citește mai puțin","read_more_about":"Citește mai mult despre","read_less_about":"Citește mai puțin despre","displaying":"Afișează %{type}","yotpo_home":"Pagina principală Yotpo","user_avatar":"Imagine User","likes":"Like-uri","sold_in_the_last_month":"Vândut în ultima lună","errors":{"empty":"Câmpurile titlu & conținut nu pot fi goale","score":"Introdu numărul de stele pe care îl acorzi acestui review","display_name":"Câmpul nume nu poate fi gol","email":"Email invalid","max_length":"Lungimea maximă a fost depășită","user-already-reviewed":"Review-ul tău a fost deja trimis.","mandatory_field":"Te rugăm să completezi toate câmpurile obligatorii(*)","open_question_answer_length":"Răspunsul trebuie să conțină cel puțin %{min_length} charactere","open_question_general":"Unul sau mai multe răspunsuri nu îndeplinesc criteriile cerute"},"first":{"empty":"Momentan nu sunt %{type} pentru acest produs.","empty_dedicated_page":"Momentan nu sunt %{type}.","be_the_first_review":"Fii primul care scrie un %{type}","be_the_first_question":"Fii primul care pune o %{type}","content_type":{"review":"review","reviews":"review-uri","question":"întrebare","questions":"întrebări"}},"placeholder":{"title":"titlu","review":"review","question-content":"conținut întrebare","user_your_name":"nume și prenume","email":"email"},"syndication":{"reviewed_at":"Adăugat la"},"grouping":{"grouped_review":"Adăugat în:"},"upload_videos":{"button_title":"Adaugă","caption_modal":{"title":"Adaugă o captură","invalid_type":"Fișierele trebuie să fie în format JPG, PNG, GIF, MP4, MOV sau FLV","invalid_size":"Dimensiunea fișierului depășește 2GB"},"upload_error":"Încărcarea a eșuat. Încearcă din nou"},"upload_photos":{"button_title":"Adaugă imaginea","user_details_modal":{"title":"Spune-ne ceva despre tine","subtitle":"Nu vom afișa niciodată numele complet sau e-mailul","name_placeholder":"Nume și prenume","email_placeholder":"Adresa de email","submit":"Trimite"},"thankyou_modal":{"title":"Îți mulțumim!","title_secondary":"Ești grozav!","subtitle":"Postarea ta va apărea pe site","subtitle_secondary":"imediat ce va fi aprobată","close":"Închide"},"upload_error_modal":{"title":"Oops.","title_secondary":"Ceva nu a funcționat","subtitle":"Te rugăm să verifici conexiunea sau să încerci din nou","close":"Închide"},"caption_modal":{"title":"Adaugă o legendă imaginii tale","next_button":"Următorul","submit_button":"Trimite","add_more_button":"Adaugă mai mult","caption_placeholder":"Adaudă o imagine","invalid_type":"Fișierul trebuie să fie în format JPG, PNG, sau GIF","invalid_size":"Dimensiunea fișierului depășește 15MB","invalid_image_dimensions":"Imaginea trebuie să aibă cel puțin dimensiunea 400 x 400 px","invalid_image_file":"Ooops, nu am putut încărca imaginea ta"}},"product_bottomline":{"related_fields":{"see_more":"VEZI MAI MULT","see_less":"VEZI MAI PUȚIN"}},"filter_and_search":{"filters_container":{"header":"Filtre Review-uri","clear_all_btn_text":"Șterge tot","free_text_search_placeholder":"Caută review-uri","scores_drop_down_button_value":"Rating","images_drop_down_button_value":"Toate review-urile","images_drop_down_answer":"Review-uri cu imagini"},"more-filters":"mai multe filtre","filters":"FILTRE","clear-all":"Șterge tot","only-with-images":"Doar cu imagini","with-images-only":"Doar imagini","show":"Arată","scores_element_value":"Rating","sort_drop_down_most_relevant_value":"Cel mai relevant"},"empty_search_results":{"text":"Ne pare rău, niciun review nu corespunde criteriilor tale. Șterge sau modifică filtrele și încearcă din nou.","button_text":"Șterge toate filtrele"},"search_in_progress":{"text":"Actualizarea rezultatelor"}},"testimonials":{"reviews_by":"Review-uri de","yotpo_home":""},"star_distribution":{"show_all_reviews":"Afișează toate review-urile"},"product_fields":{"size":{"tooltip":{"small":"Dimensiune mică","fit":"Potrivită ca și dimensiune","large":"Dimensiune depășită"}}},"shoppers_say":{"more_reviews":"MAI MULTE REVIEW-URI"}}}
  let ProductId = ""; 

  //Clipboard text here.
  let ClipBoardHeading = "Follow these steps to add this";
  let ScriptClipboard = "1. Add the following to your <head> tag.";
  let ScriptClipboardNote =
    "If you already have this script, please disregard since using one script will work for all of the Yotpo code snippets";
  let SnippetClipboard =
    "2. Add the following code snippet to your product page.";
  let SnippetClipboardNote =
    "Make sure you replace each data element with the appropriate values of your website and product attributes.";

  return (
    <>
      <div className="wrapper">
        <div class="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            productid={ProductId}
            active="true"
            heading="Reviews Widget"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <QA
            instanceid={InstanceId_QA}
            productid={ProductId}
            active="false"
            heading="Q&A"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <SEO
            instanceid={InstanceId_SEO}
            productid={ProductId}
            active="false"
            heading="SEO"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsCarousel
            instanceid={InstanceId_Carousel}
            productid={ProductId}
            active="false"
            heading="Reviews Carousel"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <StarRating
            instanceid={InstanceId_StarRating}
            productid={ProductId}
            active="false"
            heading="Star Rating"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            productid={ProductId}
            active="false"
            heading="Promoted Products"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <UgcGallery
            instanceid={InstanceId_UgcGallery}
            productid={ProductId}
            active="false"
            heading="UGC Gallery"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsTab 
            instanceid={InstanceId_ReviewsTab} 
            productid={ProductId} 
          />
        </div>
      </div>
    </>
  );
}

export default App;