export function saveToLocalStorage(cart) {
    //* localstorage veri ekleme
   localStorage.setItem("cart",JSON.stringify(cart));
}

export function getCartFromLocalStorage() {
    //* Localstorge da cart adından bir key varsa json formatında geir.
    //* yoksa da boş bir dizi dönder
   return JSON.parse(localStorage.getItem("cart")) || [];
}
//* sepetteki ürün miktarını hesaplar.
export function updateCartIcon(cart) {
    console.log(cart);
    const cartIcon = document.getElementById("cart-icon");
    const i = document.querySelector(".bx-shopping-bag");
    console.log(i);
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log(totalQuantity);
    i.setAttribute("data-quantity", totalQuantity);
    cartIcon.setAttribute("data-quantity",totalQuantity);
}

export function calculateCartTotal(cart){
    return cart.reduce((sum,item) => sum + item.price * item.quantity, 0)
}