import { signaturePad } from "../App.js"
import { darFormatoRUT } from "./utils.js";

const btnAgregar = document.querySelector('#btn_agregar');
const form = document.querySelector("form");
let aux = 1;

function formatName(names){
	const ans = names.toLowerCase();
	const nameSplit = ans.split(" ");

	const arrNames = nameSplit.map(function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	});

	return arrNames.join(" ")
}

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const doc = new jsPDF('p', 'pt', 'A4');
	const dpto = document.getElementById("dpto");
	const tipo_residente = document.querySelector('input[name="tipo_residente"]:checked').value;
	const ingreso = document.getElementById("f_ingreso").value;
	const salida = document.getElementById("f_salida").value;
	const nombre_prop = document.getElementById("nombre_prop").value;
	const rut_prop = document.getElementById("rut_prop").value;
	const tel_prop = document.getElementById("tel_prop").value;
	const mail_prop = document.getElementById("mail_prop").value;
	const nombre_corredora = document.getElementById("nombre_corredora").value;
	const rut_corredora = document.getElementById("rut_corredora").value;
	const tel_corredora = document.getElementById("tel_corredora").value;
	const mail_corredora = document.getElementById("mail_corredora").value;
	const residentes = document.querySelectorAll(".residente");
	const aut_mascota = document.querySelector('input[name="autorizacion_mascota"]:checked').value;
	const cantidad_gatos = document.getElementById("cant_gatos").value;
	const cantidad_perros = document.getElementById("cant_perros").value;
	const patente = document.getElementById("patente").value;
	const marca = document.getElementById("marca").value;
	const firma = signaturePad.toDataURL();

	var xOffset = doc.internal.pageSize.width / 2;
	let yOffset = 25
	doc.setFontSize(20);
	doc.addImage(firma, 'PNG', 300, 765, 400, 60);
	doc.text("Condominio Espacio Uno III", xOffset, yOffset,'center');
	doc.setFontSize(12);
	doc.text("Ficha de Residente", xOffset,(yOffset += 20),'center');
	doc.setFontSize(20);
	doc.text("DPTO. "+dpto.value, xOffset, (yOffset += 23), 'center');
	doc.setFontSize(12);
	doc.setFont(undefined, 'bold').text(tipo_residente.toUpperCase(), 40, (yOffset += 20));
	doc.text("INGRESO:" ,315, yOffset);
	doc.setFont(undefined, 'normal').text(ingreso, (320 + doc.getTextWidth("INGRESO:")), yOffset)
	doc.setFont(undefined, 'bold').text("SALIDA:" , 450, yOffset);
	doc.setFont(undefined, 'normal').text(salida, (455 + doc.getTextWidth("SALIDA:")), yOffset)
	doc.setDrawColor(0, 0, 0);
	doc.line(25, (yOffset += 10), 570, (yOffset));
	doc.line(25, 98, 25, 828);
	doc.line(570, 98, 570, 828);
	doc.setFont(undefined, 'bold').text("DATOS DEL PROPIETARIO", 40, (yOffset += 20));
	doc.setDrawColor(255, 0, 0);
	doc.line(40, (yOffset += 5), 40 + doc.getTextWidth("DATOS DEL PROPIETARIO"), yOffset)
	doc.text("Nombre:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(formatName(nombre_prop), (50 + doc.getTextWidth("Nombre:")), yOffset);
	doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(rut_prop, (45 + doc.getTextWidth("Rut:")), yOffset);
	// PHONE
	doc.setFont(undefined, 'bold').text("Télefono:", 200, yOffset);
	doc.setFont(undefined, 'normal').text(tel_prop, (210 + doc.getTextWidth("Télefono:")), yOffset);
	// MAIL
	doc.setFont(undefined, 'bold').text("Correo:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(mail_prop, (50 + doc.getTextWidth("Correo")) , yOffset);
	doc.setDrawColor(0, 0, 0);
	doc.line(25, (yOffset += 10), 570, yOffset);
	// CORREDORA
	doc.setFont(undefined, 'bold').text("DATOS CORREDORA O ENCARGADO", 40, (yOffset += 20));
	doc.setDrawColor(255, 0, 0);
	doc.line(40, (yOffset += 5), 40 + doc.getTextWidth("DATOS CORREDORA O ENCARGADO"), yOffset)
	doc.text("Nombre:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(formatName(nombre_corredora), (50 + doc.getTextWidth("Nombre:")), yOffset);
	// RUT
	doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(rut_corredora, (45 + doc.getTextWidth("Rut:")), yOffset);
	// PHONE
	doc.setFont(undefined, 'bold').text("Télefono:", 200, yOffset);
	doc.setFont(undefined, 'normal').text(tel_corredora, (210 + doc.getTextWidth("Télefono:")), yOffset);
	// MAIL
	doc.setFont(undefined, 'bold').text("Correo:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(mail_corredora, (50 + doc.getTextWidth("Correo")) , yOffset);
	doc.setDrawColor(0, 0, 0);
	doc.line(25, (yOffset += 10), 570, yOffset);

	for (var i = 1; i < 6; i++) {
		yOffset += 20;
		doc.setFont(undefined, 'bold').text(`RESIDENTE ${i}`, xOffset, yOffset,'center');
		// console.log(element.querySelector(`#nombre_r`${index+1}));
		// NOMBRE
		doc.text("Nombre:", 40, (yOffset += 20));
		if (document.querySelector(`#nombre_r${i}`) !== null) {
			doc.setFont(undefined, 'normal').text(formatName(document.querySelector(`#nombre_r${i}`).value), (50 + doc.getTextWidth("Nombre:")), yOffset);
		}
		// RUT
		doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
		if (document.querySelector(`#rut_r${i}`) !== null) {
			doc.setFont(undefined, 'normal').text(document.querySelector(`#rut_r${i}`).value, (45 + doc.getTextWidth("Rut:")), yOffset);
		}
		 // PHONE
		 doc.setFont(undefined, 'bold').text("Télefono:", 200, yOffset);
		 if (document.querySelector(`#tel_r${i}`) !== null) {
		 	doc.setFont(undefined, 'normal').text(document.querySelector(`#tel_r${i}`).value, (210 + doc.getTextWidth("Télefono:")), yOffset);
		 }
			// MAIL
			doc.setFont(undefined, 'bold').text("Correo:", 40, (yOffset += 20));
			if (document.querySelector(`#mail_r${i}`) !== null) {
				doc.setFont(undefined, 'normal').text(document.querySelector(`#mail_r${i}`).value, (50 + doc.getTextWidth("Correo")) , yOffset);
			}
		// LINE
		doc.line(25, (yOffset += 10), 570, yOffset);
	}

	doc.setFont(undefined, 'bold').text("Cantidad total de personas:", 40, (yOffset += 20));
	doc.text("Firma responsable:", 430, yOffset);
	doc.setFont(undefined, 'normal').text(residentes.length.toString(), (55 + doc.getTextWidth("Cantidad total de personas:")), yOffset);
	doc.setFont(undefined, 'bold').text("Propietario autoriza mascota:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(aut_mascota, (55 + doc.getTextWidth("Propietario autoriza mascota:")), yOffset);
	doc.setFont(undefined, 'bold').text("Gatos:", 230, yOffset);
	doc.setFont(undefined, 'normal').text(cantidad_gatos, (235 + doc.getTextWidth("Gatos:")), yOffset);
	doc.setFont(undefined, 'bold').text("Perros:", 285, yOffset);
	doc.setFont(undefined, 'normal').text(cantidad_perros, (290 + doc.getTextWidth("Perros:")), yOffset);
	doc.setFont(undefined, 'bold').text("Vehículo:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(marca.toUpperCase(), (50 + doc.getTextWidth("Vehículo:")), yOffset);
	doc.setFont(undefined, 'bold').text("Patente:", 40, (yOffset += 20));
	doc.setFont(undefined, 'normal').text(patente.toUpperCase(), (50 + doc.getTextWidth("Patente:")), yOffset);
	doc.line(25, (yOffset += 10), 570, yOffset);
	doc.output('save', new Date().toISOString().split('T')[0] + '_'+ dpto.value + '.pdf')
	// doc.output('dataurlnewwindow', { filename: 'archivo.pdf'})

})


btnAgregar.onclick = () => {
	let html = document.getElementById(`residente_${aux}`)
	aux++;
	let template = `
	<fieldset id="residente_${aux}" class="residente">
	<h3 align="center">RESIDENTE ${aux}</h3>
	<div class="form-group">
	<label for="nombre_r${aux}">Nombre: </label>
	<input type="text" class="form-control" name="nombre_r${aux}" id="nombre_r${aux}" placeholder="Nombre residente ${aux}" required>
	</div>
	<div class="flex">
	<div class="form-group">
	<label for="rut_r${aux}">Rut: </label>
	<input type="tel" class="form-control" name="rut_r1" id="rut_r${aux}" placeholder="Rut residente ${aux}" required>
	</div>
	<div class="form-group">
	<label for="tel_r${aux}">Teléfono: </label>
	<input type="tel" class="form-control" name="tel_r1" id="tel_r${aux}">
	</div>
	</div>
	<div class="form-group">
	<label for="trabajo_r${aux}">Lugar de trabajo y/o Estudio</label>
	<input type="text" class="form-control" name="trabajo_r1" id="trabajo_r${aux}">
	</div>
	</fieldset>`
	if (aux < 6){
		html.insertAdjacentHTML('afterend', template);
		return
	}
	alert("El límite son 5 residentes");
}

function addOneYear(date) {
	date.setFullYear(date.getFullYear() + 1);
	return date;
}

function getDate(date) {
		// var today = new Date();
		var dd = date.getDate();
		var mm = date.getMonth()+1; //Enero es 0!
		var yyyy = date.getFullYear();
		if(dd<10) {
			dd = '0'+dd
		}
		if(mm<10) {
			mm = '0'+mm
		}

		return dd + '/' + mm + '/' + yyyy;;
	}

	async function handleOnChangeRadio(event) {
		let date = new Date()
		if (event.target.id === "turistas"){
			document.getElementById("f_ingreso").value = getDate(date);
			date.setDate(date.getDate() + 1)
			document.getElementById("f_salida").value = getDate(date)
		}
		else if (event.target.id === "anio_corrido") {
		// alert('Checked radio with ID = ' + event.target.id);
		document.getElementById("f_ingreso").value = getDate(date);
		document.getElementById("f_salida").value = getDate(addOneYear(date));
	} else if (event.target.id === "mar_dic") {
		document.getElementById("f_ingreso").value = getDate(new Date());
		document.getElementById("f_salida").value = "31/12/"+date.getFullYear()
	} else if (event.target.id === "si") {
		Swal.fire({
			title: "<h1></H1>IMPORTANTE</h1>",
			icon: "info",
			text: "Modal with a custom image.",
			width: "90%",
			html: `
			<p style="font-size: 1.8em">Ademas deberá <b>enviar un correo a la <a href="mailto:comite.espaciouno@gmail.com">administración</a></b> y adjuntar la documentación de desparasitación y vacunación de las mascotas.</p>
			`,
			customClass: {
				confirmButton: "btn btn-success btn-lg"
			}
		});
		document.getElementById("box_mascotas").classList.remove("hidden")
	}else if (event.target.id === "no") {
		document.getElementById("box_mascotas").classList.add("hidden");
		document.getElementById("cant_gatos").value = 0;
		document.getElementById("cant_perros").value = 0;
	}
}

document.querySelectorAll("input[type='radio']").forEach((input) => {
	input.addEventListener('change', handleOnChangeRadio);
});
let activate = false;
document.getElementById('btn_firmar').addEventListener('click', (e) => {
	if (activate) {

	} else {
		document.getElementById("signature-canvas").style.visibility = 'visible';
		document.querySelector(".signature").style.height = '200px';
		const div = document.createElement('div');
		div.textContent = 'Resetear firma'
		div.classList.add("btn", "btn-primary")
		div.style.marginBottom = '5px';
		div.id = "resetear_firma";
		div.onclick = function() {
			signaturePad.clear();
		}
		document.getElementById('btn_firmar').insertAdjacentElement("afterend", div);
		e.target.style.display = 'none'
		activate = true;
	}
})


function handleOnInput(e) {
	let rutFormateado = darFormatoRUT(e.target.value);
	e.target.value = rutFormateado;
}

function on(eventName, selector, handler) {
	document.addEventListener(eventName, function(event) {
		const elements = document.querySelectorAll(selector);
		const path = event.composedPath();
		path.forEach(function(node) {
			elements.forEach(function(elem) {
				if (node === elem) {
					handler.call(elem, event);
				}
			});
		});
	}, true);
}

on('input', 'input[id^="rut"]', handleOnInput);


