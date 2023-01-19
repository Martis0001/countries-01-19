console.log("test js failas");

const main_input = document.querySelector('input');

// const photo = document.getElementById('photo');
const main_btn = document.querySelector('button');

const imgContainer = document.querySelector('.img-container');
console.log(imgContainer)






async function getData(e) {
    e.preventDefault();

    if (document.querySelector('.deletible') !== undefined) {
        // console.log(newDiv.classList.contains('deletible'))
        document.querySelectorAll('.deletible').forEach(item => item.remove());

        // bandom.map(item => item.classList.remove('deletible'))

    }

    const word = main_input.value;
    const res = await fetch(`https://restcountries.com/v3.1/name/${word}`);
    const data = await res.json();

    const newDiv = document.createElement('div');

    console.log(data)



    if (data.status === 404) {

        const userMsg = document.createElement('p');
        userMsg.classList.add('userMsg');
        userMsg.innerText = 'NOT FOUND'
        imgContainer.appendChild(userMsg);

        console.log('geras')
    } else {
        if (document.querySelector('.userMsg') !== undefined) {
            // console.log(newDiv.classList.contains('deletible'))
            document.querySelectorAll('.userMsg').forEach(item => item.remove());
    
            // bandom.map(item => item.classList.remove('deletible'))
    
        }
        data.map(item => {

            newDiv.classList.add('deletible');
            imgContainer.appendChild(newDiv)

            const img = `<img src='${item.flags.png}'></img>
                    <p>Country's name: ${item.name.common}</p>`

            newDiv.innerHTML += img;

        })
    }

    if (main_input.value.length <= 3) {
        main_input.value = "";
        input = main_input.value
        if (input.length < 3) {
            alert("need at least 3 letters in the username");
            
        }

        function resolveAfter2Seconds() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('resolved');
                }, 2000);
            });
        }
        
        async function asyncCall() {
            console.log('calling');
            const result = await resolveAfter2Seconds();
            console.log(result);
            // Expected output: "resolved"
        }
        asyncCall();
    }









}

main_btn.addEventListener('click', getData)