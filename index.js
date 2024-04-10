const input__in = document.querySelector('.input__in').value;
let caunt = Number(localStorage.getItem('i'));

if(!caunt == 0){
    //выводим данные с localStorage
    for(let i = 0; i < caunt; i++){
        if(localStorage.getItem(`id${i}`) == null) {
            console.log('no ok');
        }
        else{
            createTask(localStorage.getItem(`id${i}`));
        }
    }
}

document.querySelector('.btn__add').onclick = function(){
    const input = document.querySelector('.input__in');
    value = input.value;
    input.value = '';
    

    if(value.length === 0){
        alert("Please Enter a Task");
        console.log(input__in);
    }
        else{
            localStorage.setItem(`id${caunt}`,`${value}`);
            const a = localStorage.getItem(`id${caunt}`);
            console.log(a);
            createTask(a);
            caunt++;
            localStorage.setItem('i',`${caunt}`);
        }
    }

function createTask(value){
    document.querySelector('.tasks').innerHTML += `
        <div class="task">
                <input class="input__out" type="text" value="${value}" readonly>
                <button class="edit btn">Edit</button>
                <button class="delete btn">Delete</button>
            </div>`;

        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                console.log(i);
                localStorage.removeItem(`id${i}`);
                this.parentElement.remove();
            }
        }

        const edit_tasks = document.querySelectorAll('.edit');
        for(let i =0; i<edit_tasks.length; i++){
            edit_tasks[i].onclick = function(){
                console.log(edit_tasks[i]);
                const vInput = this.parentElement.firstElementChild;
                if(edit_tasks[i].innerHTML === 'Edit'){
                    vInput.removeAttribute('readonly');
                    edit_tasks[i].innerHTML = 'Set';
                }
                else{
                    localStorage.setItem(`id${i}`, vInput.value);
                    vInput.setAttribute('readonly', true);
                    edit_tasks[i].innerHTML = 'Edit';
                }
            }
        }
}