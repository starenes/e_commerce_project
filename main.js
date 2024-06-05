// SAYFANIN YÜKLENME ANINI İZLEYECEĞİZ
import { addToCart,displayCartTotal,renderCartItems } from "./js/cart.js";
import { fetchProducts, renderProducts } from "./js/products.js"; 

document.addEventListener("DOMContentLoaded", async () => {
  // console.log(window.location.pathname.includes("index.html"));
  if ( window.location.pathname.includes("cart.html")) {
    renderCartItems();
    displayCartTotal();
  } else {
    //* Eğer sayfa cart.html sayfasında değilse ürünleri al.
  const products = await fetchProducts();
   //* Ürünleri render et ve addToCartCallback fonksiyonu tanımla
  renderProducts(products,(event) => addToCart(event,products));
  }
}); //* cart.html de script e bağLa

// ------ BU KISIM İLK ÇALIŞMA GÜNÜNE AİT VE HELPERS İLE BERABER YORUM SATIRINA ALIP GÜNCELLİYORUZ -------- 
//* burası bizim anadosyamız
// import { element } from "./js/helpers.js";
// import { renderProducts } from "./js/ui.js";
// json dizi;
// let products = [];
// console.log(element.productList);

//! 1.kod querySelector ve toggle menu içerisini açtık
// let menu = document.querySelector(".navbar");
// let menuIcon = document.querySelector("#menu-icon");
//* menü iconu tık. "open menu " classını ekle çıkar
//* bir tıklanma olayı ekleyeceğiz; menu classıne openmenu ekleyip çıkarmak istiyoruz. toggle yöntemi. küçük ekranda menu açılıp kapanıyor.
// menuIcon.addEventListener("click", () => menu.classList.toggle("open-menu"));

//*json formatı konsolda 200 başarılı 400 gelirse bizimle alakalı durum var yani url veya bi hata 500 server hatası
//*db.json dosyasına fetch ile istek atttık
//*json formatinda yaz! yani gelen cevabı json formatında yaz diyoruz
    //*konsolda fulfilled yani başarılı istek
    //* gelen cevabı json formatına çevirdik ve products değişkenine atatık
    //*yukarıda dizi oluşturcaz şimdi
// async function fetchProducts() {
//   try {
//     const response = await fetch("db.json");
//     console.log(response);
    
//     products = await response.json();
//     renderProducts(products); 
//   } catch (error) {
//     console.error("ürünler yüklenirken hata oluştu!", error);
//   }
// }

// fetchProducts();
// ------------------------------