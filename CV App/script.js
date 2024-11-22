document.getElementById('hasExperience').addEventListener('change', function() {
    const experienceContainer = document.getElementById('experienceContainer');
    if (this.checked) {
        const experienceDiv = document.createElement('div');
        experienceDiv.className = 'experience-item';

        const jobTitleInput = document.createElement('input');
        jobTitleInput.type = 'text';
        jobTitleInput.name = 'jobTitle';
        jobTitleInput.className = 'form-control validate'; // Añadido para la validación
        jobTitleInput.placeholder = 'Título del puesto';
        jobTitleInput.required = true;
        experienceDiv.appendChild(jobTitleInput);

        const companyInput = document.createElement('input');
        companyInput.type = 'text';
        companyInput.name = 'companyName';
        companyInput.className = 'form-control validate'; // Añadido para la validación
        companyInput.placeholder = 'Nombre de la empresa';
        companyInput.required = true;
        experienceDiv.appendChild(companyInput);

        const dateFromInput = document.createElement('input');
        dateFromInput.type = 'date';
        dateFromInput.name = 'dateFrom';
        dateFromInput.className = 'form-control validate'; // Añadido para la validación
        dateFromInput.required = true;
        experienceDiv.appendChild(dateFromInput);

        const dateToInput = document.createElement('input');
        dateToInput.type = 'date';
        dateToInput.name = 'dateTo';
        dateToInput.className = 'form-control validate'; // Añadido para la validación
        dateToInput.required = true;
        experienceDiv.appendChild(dateToInput);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Eliminar';
        experienceDiv.appendChild(removeBtn);

        experienceContainer.appendChild(experienceDiv);

        removeBtn.addEventListener('click', function() {
            experienceDiv.remove();
        });
    } else {
        experienceContainer.innerHTML = '';
    }
});

// Mostrar u ocultar los campos de certificaciones
document.getElementById('hasCertifications').addEventListener('change', function() {
    const certificationsContainer = document.getElementById('certificationsContainer');
    if (this.checked) {
        const certificationDiv = document.createElement('div');
        certificationDiv.className = 'certification-item';

        const certificationInput = document.createElement('input');
        certificationInput.type = 'text';
        certificationInput.name = 'certificationName';
        certificationInput.className = 'form-control validate'; // Añadido para la validación
        certificationInput.placeholder = 'Nombre de la certificación';
        certificationInput.required = true;
        certificationDiv.appendChild(certificationInput);

        const certificationDateInput = document.createElement('input');
        certificationDateInput.type = 'date';
        certificationDateInput.name = 'certificationDate';
        certificationDateInput.className = 'form-control validate'; // Añadido para la validación
        certificationDateInput.required = true;
        certificationDiv.appendChild(certificationDateInput);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Eliminar';
        certificationDiv.appendChild(removeBtn);

        certificationsContainer.appendChild(certificationDiv);

        removeBtn.addEventListener('click', function() {
            certificationDiv.remove();
        });
    } else {
        certificationsContainer.innerHTML = '';
    }
});

// Modifica la generación del CV para incluir experiencia laboral y certificaciones
document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar campos
    if (document.querySelectorAll('.validate:invalid').length > 0) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    const generatedCV = document.getElementById('generatedCV');
    generatedCV.innerHTML = ''; // Limpiar contenido previo

    // Resto del código para generar el CV...

    // Agregar Experiencia Laboral
    if (document.getElementById('hasExperience').checked) {
        const experienceH4 = document.createElement('h4');
        experienceH4.textContent = 'Experiencia Laboral';
        generatedCV.appendChild(experienceH4);

        const experienceItems = document.querySelectorAll('.experience-item');
        const experienceList = document.createElement('ul');
        generatedCV.appendChild(experienceList);
        experienceItems.forEach(function(item) {
            const li = document.createElement('li');
            const jobTitle = item.querySelector('[name="jobTitle"]').value;
            const companyName = item.querySelector('[name="companyName"]').value;
            const dateFrom = item.querySelector('[name="dateFrom"]').value;
            const dateTo = item.querySelector('[name="dateTo"]').value;
            li.textContent = `${jobTitle} en ${companyName} (${dateFrom} - ${dateTo})`;
            experienceList.appendChild(li);
        });
    }

    // Agregar Certificaciones
    if (document.getElementById('hasCertifications').checked) {
        const certificationsH4 = document.createElement('h4');
        certificationsH4.textContent = 'Certificaciones';
        generatedCV.appendChild(certificationsH4);

        const certificationItems = document.querySelectorAll('.certification-item');
        const certificationList = document.createElement('ul');
        generatedCV.appendChild(certificationList);
        certificationItems.forEach(function(item) {
            const li = document.createElement('li');
            const certificationName = item.querySelector('[name="certificationName"]').value;
            const certificationDate = item.querySelector('[name="certificationDate"]').value;
            li.textContent = `${certificationName} (${certificationDate})`;
            certificationList.appendChild(li);
        });
    }

    clearForm();
});
















