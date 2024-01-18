const btnAgregar = document.querySelector('#btn_agregar');
const form = document.querySelector("form");


// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// })

btnAgregar.onclick = () => {
	const nombre = prompt('Nombre: ');
	const rut = prompt('Rut: ');
	const tel = prompt('Télefono: ');
}


let canvas = document.getElementById('main');
let btnPDFout = document.getElementById('pdfout');

btnPDFout.addEventListener('click', ()=> {
	const doc = new jsPDF('p', 'pt', 'letter');
	const margin = 20;
	let scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
	let scaleMobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect();
  const dpto = document.getElementById("dpto");
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
  //     foreignObjectRendering: true,
  //   },
  //   callback: function(doc) {

  //     doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})
  //   }
  // })

  // Other solution
	// doc.setFontSize(40);
    var xOffset = doc.internal.pageSize.width / 2;
  	doc.text("Condominio Espacio Uno III", xOffset, 25,'center');
    doc.setFontSize(10);
    doc.text("Ficha de Residente", xOffset,45,'center');
    doc.text("Número de Departamento: "+dpto.value, 20, 65,);
  	doc.output('dataurlnewwindow',{ filename: 'pdf.pdf'})
	// }
})