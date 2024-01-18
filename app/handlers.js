const btnAgregar = document.querySelector('#btn_agregar');
const form = document.querySelector("form");


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

  var xOffset = doc.internal.pageSize.width / 2;
  doc.setFontSize(20);
  doc.text("Condominio Espacio Uno III", xOffset, 25,'center');
  doc.setFontSize(10);
  doc.text("Ficha de Residente", xOffset,45,'center');
  doc.setDrawColor(0, 0, 0);
  doc.line(35, 60, 570, 60);
  doc.setFontSize(13);
  doc.text("Número de Departamento: "+dpto.value, 40, 85);
  doc.text("Tipo de Residente: "+tipo_residente, 305, 85);
  doc.text("DATOS DEL PROPIETARIO: ", 40, 115);
  const textWidth = doc.getTextWidth("DATOS DEL PROPIETARIO: ");
  doc.setDrawColor(255, 0, 0);
  doc.line(40, 120, 40 + textWidth, 120)
  doc.text("Nombre: "+nombre_prop, 40, 135);
  doc.text("Rut: "+rut_prop, 40, 155);
  doc.text("Télefono: "+tel_prop, 160, 155);
  doc.text("Correo: "+mail_prop, 315, 155);

  doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})

})

btnAgregar.onclick = () => {
	const nombre = prompt('Nombre: ');
	const rut = prompt('Rut: ');
	const tel = prompt('Télefono: ');
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