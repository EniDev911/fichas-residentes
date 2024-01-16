let aux = 1;

function eliminarPersona() {

}

function actualizarGUI(node) {
	const resumen = document.querySelector("#resumen");
	resumen.appendChild(node)
}


function agregarNodo(nombre, rut, tel) {
	const html = `
		<fieldset>
		<h3 align="center">Residente ${aux}</h3>
		<div class="flex">
			<label for="nombre_r1">Nombre: </label>
			<input type="text" class="input" name="nombre_r1" value="${nombre}">
		</div>
		<div class="flex">
			<div class="flex">
				<label for="rut_r1">Rut: </label>
				<input type="text" class="input" name="rut_r1" value="${rut}">
			</div>
			<div class="flex">
				<label for="tel_r1">Teléfono: </label>
				<input type="text" class="input" name="tel_r1" value="${tel}">
			</div>
		</div>
		<div class="flex">
			<label for="trabajo_r1">Lugar de trabajo y/o Estudio</label>
			<input type="text" class="input" name="trabajo_r1" value="${nombre}">
		</div>
	</fieldset>`
}

function nuevaPersona() {
	const nombre = prompt('Nombre: ');
	const rut = prompt('Rut: ');
	const tel = prompt('Télefono: ');
	return {
		nombre,
		rut,
		tel
	}
}