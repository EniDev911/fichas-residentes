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


form.addEventListener("submit", (event) => {
	event.preventDefault();
  const doc = new jsPDF('p', 'pt', 'letter');
  const margin = 20;
  let scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
  let scaleMobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect();
  const dpto = document.getElementById("dpto");
  const tipo_residente = document.querySelector('input[name="tipo_residente"]:checked').value;
  const nombre_prop = document.getElementById("nombre_prop").value;
  const rut_prop = document.getElementById("rut_prop").value;
  const tel_prop = document.getElementById("tel_prop").value;
  const mail_prop = document.getElementById("mail_prop").value;
  const nombre_corredora = document.getElementById("nombre_corredora").value;
  const rut_corredora = document.getElementById("rut_corredora").value;
  const residentes = document.querySelectorAll(".residente");


  var xOffset = doc.internal.pageSize.width / 2;
  let yOffset = 25
  doc.setFontSize(20);
  doc.text("Condominio Espacio Uno III", xOffset, yOffset,'center');
  doc.setFontSize(12);
  doc.text("Ficha de Residente", xOffset,(yOffset += 20),'center');
  doc.setFontSize(20);
  doc.text("DPTO. "+dpto.value, xOffset, (yOffset += 23), 'center');
  doc.setFontSize(12);
  doc.text("Tipo de Residente: "+tipo_residente, xOffset, (yOffset += 20), 'center');
  doc.setDrawColor(0, 0, 0);
  doc.line(35, (yOffset += 10), 570, (yOffset));
  doc.text("DATOS DEL PROPIETARIO: ", 40, (yOffset += 20));
  let textWidth = doc.getTextWidth("DATOS DEL PROPIETARIO: ");
  doc.setDrawColor(255, 0, 0);
  doc.line(40, (yOffset += 5), 40 + textWidth, yOffset)
  doc.setFont(undefined, 'bold').text("Nombre:", 40, (yOffset += 20));
  doc.setFont(undefined, 'normal').text(formatName(nombre_prop), (50 + doc.getTextWidth("Nombre:")), yOffset);
  doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
  doc.setFont(undefined, 'normal').text(rut_prop, (45 + doc.getTextWidth("Rut:")), yOffset);
  doc.setFont(undefined, 'bold').text("Télefono:", 180, yOffset);
  doc.setFont(undefined, 'normal').text(tel_prop, (190 + doc.getTextWidth("Télefono:")), yOffset);
  doc.text("Correo: "+mail_prop, 315, yOffset);
  doc.setDrawColor(0, 0, 0);
  doc.line(35, 175, 570, 175);
  doc.text("DATOS CORREDORA O ENCARGADO: ", 40, 195);
  doc.text("Nombre: "+nombre_corredora, 40, 215);
  doc.text("Rut: "+rut_corredora, 40, 235);
  doc.text("Télefono: "+tel_prop, 160, 235);
  doc.text("Correo: "+mail_prop, 315, 235);
  let y = 295;
  doc.line(35, y, 570, y);
  residentes.forEach( function(element, index) {
  doc.text(`RESIDENTE ${index+1}`, xOffset, y,'center');
    y += 20;
    // console.log(element.querySelector(`#nombre_r`${index+1}));
    let nombre = element.querySelector(`#nombre_r${index+1}`).value
    doc.text("Nombre: "+nombre, 40, y);
  });

  doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})


})

btnAgregar.onclick = () => {
  let html = document.getElementById(`residente_${aux}`)
  aux++;
  let template = `
    <fieldset id="residente_${aux}" class="residente">
    <h3 align="center">RESIDENTE ${aux}</h3>
    <div class="form-group">
      <label for="nombre_r${aux}">Nombre: </label>
      <input type="text" class="form-control" name="nombre_r${aux}" id="nombre_r${aux}">
    </div>
    <div class="flex">
      <div class="form-group">
        <label for="rut_r${aux}">Rut: </label>
        <input type="text" class="form-control" name="rut_r1">
      </div>
      <div class="form-group">
        <label for="tel_r${aux}">Teléfono: </label>
        <input type="text" class="form-control" name="tel_r1">
      </div>
    </div>
    <div class="form-group">
      <label for="trabajo_r${aux}">Lugar de trabajo y/o Estudio</label>
      <input type="text" class="form-control" name="trabajo_r1">
    </div>
  </fieldset>`
  if (aux < 7){
    html.insertAdjacentHTML('afterend', template);
    return
  }
  alert("El límite son 6 residentes");
}


let canvas = document.getElementById('main');
let btnPDFout = document.getElementById('pdfout');

// btnPDFout.addEventListener('click', ()=> {
// 	const doc = new jsPDF('p', 'pt', 'letter');
// 	const margin = 20;
// 	let scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
// 	let scaleMobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect();
//   const dpto = document.getElementById("dpto");
//   const tipo_residente = document.querySelector('input[name="tipo_residente"]:checked').value;
//   const nombre_prop = document.getElementById("nombre_prop").value;
//   const rut_prop = document.getElementById("rut_prop").value;
//   const tel_prop = document.getElementById("tel_prop").value;
//   const mail_prop = document.getElementById("mail_prop").value;

// doc.text("Octonyan loves jsPDF", 35, 25);
// doc.addImage("examples/images/Octonyan.jpg", "JPEG", 15, 40, 180, 180);
	// checking
	// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 //  	// mobile
 //  	doc.html(canvas, {
	// 	x: margin,
 //    	y: margin,
 //    	html2canvas: {
 //      		scale: scaleMobile,
 //    	},
 //    	callback: function(doc) {
 //      		doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})
 //    	}
 //  	})
	// } else {
  // PC


  // doc.html(canvas, {
  //   x: margin,
  //   y: margin,
  //   html2canvas: {
  //     scale: scale,
  //   },
  //   callback: function(doc) {
  //     doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})
  //   }
  // })

  // Other solution
   //  var xOffset = doc.internal.pageSize.width / 2;
	  // doc.setFontSize(20);
  	// doc.text("Condominio Espacio Uno III", xOffset, 25,'center');
   //  doc.setFontSize(10);
   //  doc.text("Ficha de Residente", xOffset,45,'center');
   //  doc.setDrawColor(0, 0, 0);
   //  doc.line(35, 60, 570, 60);
   //  doc.setFontSize(13);
   //  doc.text("Número de Departamento: "+dpto.value, 40, 85);
   //  doc.text("Tipo de Residente: "+tipo_residente, 305, 85);
   //  doc.text("DATOS DEL PROPIETARIO: ", 40, 115);
   //  const textWidth = doc.getTextWidth("DATOS DEL PROPIETARIO: ");
   //  doc.setDrawColor(255, 0, 0);
   //  doc.line(40, 120, 40 + textWidth, 120)
   //  doc.text("Nombre: "+nombre_prop, 40, 135);
   //  doc.text("Rut: "+rut_prop, 40, 155);
   //  doc.text("Télefono: "+tel_prop, 160, 155);
   //  doc.text("Correo: "+mail_prop, 315, 155);

  	// doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})

	// }
// })