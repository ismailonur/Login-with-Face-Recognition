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

function getData() {
    
    var hesap = "Linkedin";
    var sifre = 123321;

    const data = new Data(hesap, sifre);
    const data1 = new Data(hesap, sifre);
    const data2 = new Data(hesap, sifre);

    const ui = new UI();

    ui.addCourseToList(data);
    ui.addCourseToList(data1);
    ui.addCourseToList(data2);

}

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The Course has been deleted', 'danger');
})