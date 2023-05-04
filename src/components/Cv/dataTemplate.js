import data from '../../data/data';

const list = (el) => {
    let output = '';
    el.forEach(element => {
        output += `<tr><td>${element[0]}</td><td>${element[1]}</td></tr>`;
    });
    return output;
}

const listExperience = (el) => {
    let output = '';
      
    el.forEach(element => {
        let j = 0;
        output += `
            <div class="works">
            <div class="date">${element[0].date}</div>
            <div class="title-work"><strong>${element[0].position}</strong></div>
            <div class="company">${element[0].company}</div>
            <ul>`;        
            
        let listLength = element[0].tasks.length;
        element[0].tasks.forEach(task => {
            output += `<li>${task}</li>`;
            j++;
            if(j === listLength) {
                output += `</ul></div>`;
            }
        });
        
    });
    
    output += `</ul>`;
    
    return output;
}

const dataTemplate = `
        <h2>${data.name} <small>(${data.experienceYears})</small></h2>
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
            ${listExperience(data.experience.works)}
        </section>
        <section class="flex">
            <div class="col-sm-50">
                <h3>Języki</h3>
                <table>
                    ${list(data.languages)}
                </table>
            </div>
            <div class="col-sm-50">
                <h3>Edukacja</h3>
                <table>
                    <tr>
                        <td>${data.education.date}</td>
                        <td>
                            <strong>${data.education.field}</strong><br />
                            ${data.education.name}<br />
                            ${data.education.spec}
                        </td>
                    </tr>    
                </table>
            </div>
        </section>
        <section class="flex">
            
            <div class="col-sm-50">
                <h3>Zainteresowania</h3>
                <table><tr><td>${data.interests}</td></tr></table>
            </div>
        </section>
`;

export { dataTemplate }