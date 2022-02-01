var bookdataArray = [];

function init() {
        if (localStorage.bookData) {
                bookdataArray = JSON.parse(localStorage.bookData);
        }
}

function addbook() {

        var d = new Date();
        var currentdateParse = Date.parse(d);
        console.log(currentdateParse);

        var bookTitle = document.getElementById("title").value;
        var bookAuthor = document.getElementById("author").value;
        var bookPrice = document.getElementById("price").value;
        var bookQuantity = document.getElementById("quantity").value;
        var bookPubyear = document.getElementById("pubyear").value;
        var userdateParse = Date.parse(bookPubyear)
        console.log(userdateParse);

        if (bookTitle.length == 0) {
                alert("Book Title is emply");
        }

        else if (bookAuthor.length == 0) {
                alert("Author name is empty")
        }

        else if (bookPrice.length == 0) {
                alert("Price can not be null")
        }

        else if (bookQuantity.length == 0) {
                alert("kindly add quantity of book")
        }

        else if (userdateParse > currentdateParse) {
                alert("kidnly correct Date");
        }

        else {
                var bookdataObj = {
                        Title: bookTitle, Author: bookAuthor, Price: bookPrice,
                        Quantity: bookQuantity, Publication: bookPubyear
                }
                bookdataArray.push(bookdataObj)

                localStorage.bookData = JSON.stringify(bookdataArray);

                alert("your book has been added");

                document.getElementById("title").value = " ";
                document.getElementById("author").value = " ";
                document.getElementById("price").value = " ";
                document.getElementById("quantity").value = " ";
                document.getElementById("pubyear").value = " ";
        }
}

function logout() {
        window.location.href = "./index.html";
}

function viewbook() {
        window.location.href = "./viewbooks.html";
}

function home() {
        window.location.href = "./home.html";
}