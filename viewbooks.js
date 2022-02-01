var bookdataArray = [];

var selectedIndex = -1;
function init() {

    document.getElementById('tablerows').innerHTML = " ";
    if (localStorage.bookData) {
        bookdataArray = JSON.parse(localStorage.bookData);

        for (var i = 0; i < bookdataArray.length; i++) {
            var viewbooktitle = bookdataArray[i].Title;
            var viewbookauthor = bookdataArray[i].Author;
            var viewbookprice = bookdataArray[i].Price;
            var viewbookquantity = bookdataArray[i].Quantity;
            var viewbookpublication = bookdataArray[i].Publication;

            prepareTableCell(viewbooktitle, viewbookauthor, viewbookprice,
                viewbookquantity, viewbookpublication, i)

        }
    }
}

function prepareTableCell(viewbooktitle, viewbookauthor, viewbookprice, viewbookquantity, viewbookpublication, index) {
    
    var createrows = document.getElementById('tablerows');
    var row = createrows.insertRow();

    var TitleCell = row.insertCell(0);
    var AuthorCell = row.insertCell(1);
    var priceCell = row.insertCell(2)
    var quantityCell = row.insertCell(3)
    var publicationCell = row.insertCell(4)
    var buttonCell = row.insertCell(5)

    TitleCell.innerHTML = viewbooktitle;
    AuthorCell.innerHTML = viewbookauthor;
    priceCell.innerHTML = viewbookprice;
    quantityCell.innerHTML = viewbookquantity;
    publicationCell.innerHTML = viewbookpublication;
    buttonCell.innerHTML = '<button onClick="editbook(' + index + ')" class="viewbookbtn"> Edit </button>   <br>  <button onClick="deletebook(' + index + ')" class="viewbookbtn">   Delete </button>';
}

function view() {
    init()
}

function editbook(index) {
    // document.getElementById('myForm').innerHTML=" ";
    document.getElementById("myForm").style.display = "block";
    selectedIndex = index;

    var bookObj = bookdataArray[index];

    document.getElementById("title").value = bookObj.Title;
    document.getElementById("author").value = bookObj.Author;
    document.getElementById("price").value = bookObj.Price;
    document.getElementById("quantity").value = bookObj.Quantity;
    document.getElementById("pubyear").value = bookObj.Publication;

}

function closeForm() {
    document.getElementById("title").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("price").value = " ";
    document.getElementById("quantity").value = " ";
    document.getElementById("pubyear").value = " ";

    document.getElementById("myForm").style.display = "none";

}
function deletebook(index) {
    var table = document.getElementById('tablerows');
    table.deleteRow(index);
    bookdataArray.splice(index, 1);
    localStorage.bookData = JSON.stringify(bookdataArray);
    init();
}

function Updatebookdata(index) {
    var bookTitle = document.getElementById("title").value;
    var bookAuthor = document.getElementById("author").value;
    var bookPrice = document.getElementById("price").value;
    var bookQuantity = document.getElementById("quantity").value;
    var bookPubyear = document.getElementById("pubyear").value;

        var bookdataObj = {
            Title: bookTitle, Author: bookAuthor, Price: bookPrice,
            Quantity: bookQuantity, Publication: bookPubyear
        }

        bookdataArray.splice(selectedIndex, 1, bookdataObj)
        localStorage.bookData = JSON.stringify(bookdataArray)
        init();
}

function logout(){
    window.location.href = "./index.html";
    }

    function addbook(){
        window.location.href = "./addbooks.html";
    }
    
    function home() {
        window.location.href = "./home.html";
}
