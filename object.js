var book = {
        id: "1234",
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        illustrations: {            
            illustrator: "Jim Kay",
            type: "full color",
        },
        yearPublished: 2015,
        publisher: "Bloomsbury",
        language: "English",
        pagesNumber: 256,
        available: true,
        createdAt: "2024-04-08T07:01:56.951Z",
        getInfo: function () {
            console.log("all data:", book)
        }
    }
book.genre = "fiction";
book.getInfo();
