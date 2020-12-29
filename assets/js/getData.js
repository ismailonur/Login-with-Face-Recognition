class Data {
    constructor(hesap, sifre) {
        this.hesap = hesap;
        this.sifre = sifre;
    }
}

class UI {
    addCourseToList(course) {
        const list = document.getElementById('course-list');

        var html = `
             <tr>
                <td>${course.hesap}</td>
                <td>${course.sifre}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
             </tr>    
        `;

        list.innerHTML += html;
    }

    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove(); 
        }
    }
}

document.addEventListener("DOMContentLoaded", getData);

async function getData() {

    const ui = new UI();

    try {
        const database = await firebase.database()
            .ref(`PASS/1aLxz2xYaAYfrAuAykSdcCG6hhb2`)
            .once("value")
        const pass = Object.values(database.val())
        pass.forEach(element => {
            const data = new Data(element.name, element.subtitle);
            ui.addCourseToList(data);
        });
    } catch (e) {
        console.log(e);
    }
}

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
})