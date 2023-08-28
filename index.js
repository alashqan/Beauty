function show() {
    var x = document.getElementById("profile");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const parentDiv = document.getElementById("productList");
let prod_id = null;

const searchBar = document.getElementById('search_bar');

function show_search_bar() {
    // var x = document.getElementById("search_bar");
    // if (x.style.display === "none") {
    //     x.style.display = "inline";
    // } else {
    //     x.style.display = "none";
    // }

    // parentDiv.style.display = 'none';
    let searchBarData = searchBar.value;
    
    open('category',searchBarData);
   
}

function sendData(){
    console.log("Send data function is working")
}

function open(category, cat_name){
    fetch("https://fakestoreapi.com/products/"+category+'/'+cat_name)
            .then(res=>res.json())
            .then((json)=>

                {
                    console.log("Data Fetched From API");
                    for(let i=0; i<json.length; i++)
                        {
                        
                            console.log(json[i].title)

                            //Access prod_id from API
                            prod_id = json[i].id;
                            //console.log("Product id : "+ prod_id);

                            //Create a dynamic div element
                            const div = document.createElement('div');
                            div.className = "products_divs";

                            // const click = document.createElement('a');
                            // click.href = 'product.html'
                            // click.innerHTML = "Got to Product page"
                            // click.setAttribute('target', '_blank')
                            // click.setAttribute('onclick', 'sendData()')

                            // Access Image from API
                            const img = document.createElement('img');
                            img.className = "product_image";
                            img.src = json[i].image;

                            //Access Title from API
                            const title = document.createElement('h4');
                            title.innerHTML = json[i].title;

                            //Access rating from API
                            const rating = document.createElement('p');
                            rating.innerHTML = json[i].rating.rate + " ("+json[i].rating.count + ")";

                            //Access Prize From API
                            const prize = document.createElement('h3');
                            const offerPrize = document.createElement('del');
                            offerPrize.innerHTML = "$"+(json[i].price + 5);
                            prize.innerHTML = "$"+json[i].price;

                            //Add to cart button
                            const add_to_cart_btn = document.createElement('buttton');
                            add_to_cart_btn.innerHTML = "Add To Cart";
                            add_to_cart_btn.className = "prod_btn";

                            //Add Individual Product div to the conatiner div
                            parentDiv.append(div);
                            div.append(img);
                            // div.append(click);
                            div.append(title);
                            div.append(rating);
                            div.append(prize);
                            div.append(offerPrize);
                            div.append(add_to_cart_btn);
                        }
                })

}

open("","");

//open("category","electronics");



AOS.init();