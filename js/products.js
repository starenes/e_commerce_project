export async function fetchProducts() {
  try {
    //*db.json dosyasına fetch ile istek attık
    const response = await fetch("db.json");
    if (!response.ok) {
      //hata oluşturduk
      throw new Error("URL yanlış");
    }
    //* gelen cevabu json formatına çevirdik ve dışarıya return ettik
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

//* şimdi yazacagımız kod üzerinden ürünleri ekrana yansıtalım;
//*ürünlerin Sayfaya render eden fonksiyonu tanımlıyoruz.
export function renderProducts(products, addToCartCallback) {

  //* HTML dosyasından ürünlerin listeneceği elementi seçeriz.
  const productList = document.getElementById("productList");

  //* ürünlerin html formatında listeye eklenmesi için product dizisini dönüp her bir produc için ekrana product cartını aktardık
  productList.innerHTML = products
    .map(
      (product) => `   
 <div class="product">
 <img 
 src= "${product.image}"
 alt=""
 class="product-img"
 />
 <div class="product-info">
   <h2 class="product-title">${product.title}</h2>
   <p class="product-price">${product.price}</p>
   <a class="add-to-cart"data-id="${product.id}"> Add to cart</a>
 </div>
</div>
`
    )
    .join("");
  // tasarımda virgül ile ayrıyor bunu. join.. yazarak düzeltiyoruz
//*"add to cart" butonları seçiliyor
//* Her bir "Add to Cart" butonuna tıklama olayı ekleniyor.
  const addToCartButtons = document.getElementsByClassName("add-to-cart");   
  for (let i = 0; i < addToCartButtons.length; i++) {
const addToCartButton = addToCartButtons[i];
addToCartButton.addEventListener("click", addToCartCallback);
}
}
