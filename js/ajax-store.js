

(async () => {
        // // TODO: Create an AJAX GET request for the file under data/inventory.json
        // $.ajax('data/inventory.json').done(function (data) {
        //     console.log(data[0].title);
        //
        //     let displayOrder = "";
        //     for (let i = 0; i < data.length; i++) {
        //         displayOrder += `<tr><td>${data[i].title}</td><td>${data[i].quantity}</td><td>${data[i].price}</td><td>${data[i].categories}</td></tr>`;
        //     }
        //     $('#insertProducts').html(displayOrder);
        // });
        // // TODO: Take the data from inventory.json and append it to the products table
        // //       HINT: Your data should come back as a JSON object; use console.log() to inspect
        // //             its contents and fields
        // //       HINT: You will want to target #insertProducts for your new HTML elements



    const getData = async () => {
        const url = 'data/inventory.json';
        const options= {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return fetch(url, options).then((response) => response.json());
    };

    console.log(getData());

    const myData = await getData();
    console.log(myData);

    let displayOrder = "";
        for (let i = 0; i < myData.length; i++) {
            displayOrder += `<tr><td>${myData[i].title}</td><td>${myData[i].quantity}</td><td>${myData[i].price}</td><td>${myData[i].categories}</td></tr>`;
        }
       console.log(displayOrder);

        let myDisplayDiv = document.getElementById('insertProducts')
        let buttonPress = document.getElementById('update-button')
        buttonPress.addEventListener('click', ()=> {
        myDisplayDiv.innerHTML = displayOrder;
    })

})()