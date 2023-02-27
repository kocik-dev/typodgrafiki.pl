import { data } from '../../data/data';

const list = (el) => {
    let output = '';
    el.forEach(element => {
        output += `<tr><td>${element[0]}</td><td>${element[1]}</td></tr>`;
    });
    return output;
}

const dataTemplate = `
    <div class="content">
        <h2>${data.name} <small>(${data.experience})</small></h2>
        <section class="flex">
            <ul>
                <li><a href="mailto:${data.contact.email}">${data.contact.email}</a> <span class="text-muted">(preferowany)</span></li>
                <li>${data.contact.phone}</li>
                <li><a href="${data.contact.linedin}" target="_blank">${data.contact.linedin}</a></li>
                <li><a href="${data.contact.www}" target="_blank">${data.contact.www}</a></li>
            </ul>
            <div>${data.aboutMe}</div>
        </section>
        <section>
            <h3>Tech skils</h3>
            <table>
                ${list(data.techSkils)}
            </table>
        </section>
        <section>
            <h3>${data.experience.name}</h3>
            <table>
                ${list(data.techSkils)}
            </table>
        </section>
    </div>
`;

export { dataTemplate }