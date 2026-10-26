/* perfil.js — Villas Cádiz (demo personalizado, 27-oct-2026).
 *
 * El nombre es el del condominio. Las calles, las 96 casas, los vecinos, los
 * importes y la cuenta bancaria son de ejemplo: se cambian por los reales en
 * cuanto nos den su padrón. Lo que pidieron ver: cómo se apartan las canchas
 * de tenis.
 */
window.CC = window.CC || {};
CC.Perfil = {
  id: 'villascadiz',
  semilla: 'cadiz-1',

  condominio: {
    nombre: 'Villas Cádiz',
    direccion: '',
    ciudad: '',
    administrador: 'Comité de Administración',
    telefono: '',
    email: '',
    cuenta: 'Banorte 0456 7890 12 — CLABE 072320004567890123',
    saldoInicialCaja: 198000
  },

  calles: ['Andador Jerez', 'Andador Tarifa', 'Andador Sanlúcar', 'Andador Chiclana'],
  casasPorCalle: 24,
  prototipos: [
    { tipo: 'A', m2: 160, peso: 50 },
    { tipo: 'B', m2: 200, peso: 35 },
    { tipo: 'C', m2: 240, peso: 15 }
  ],

  /* Presupuesto mensual de egresos. Suma 132,000. */
  categorias: [
    ['Vigilancia', 52000, 'Seguridad Privada Altavista'],
    ['Energía eléctrica', 16000, 'CFE Suministrador'],
    ['Administración', 15000, 'Honorarios de administración'],
    ['Jardinería', 14000, 'Jardines del Bosque'],
    ['Limpieza', 9000, 'Servicios Integrales Muñoz'],
    ['Agua', 7000, 'SIAPA'],
    ['Recolección de basura', 6000, 'Recolectora Metropolitana'],
    ['Mantenimiento y bombas', 5000, 'Hidroservicio GDL'],
    ['Canchas de tenis', 4500, 'Tenis y Superficies de Occidente'],
    ['Seguro del inmueble', 3500, 'Seguros Atlas — póliza anual']
  ],
  presupuestoMensual: 145000,
  cuotaExtra: 900,
  conceptoExtra: 'Cuota extraordinaria — resanado y pintura de las canchas de tenis',

  /* Para ver llegar el aviso de adeudo a un WhatsApp de verdad (el de Fernando).
     El demo es público: se quita poniendo casaPrueba: null. */
  casaPrueba: {
    id: 'uni_prueba_97', clave: 'Casa 97', calle: 'Casa de prueba', numero: 97,
    prototipo: 'C', m2: 240, cuotaOverride: null,
    propietario: 'Vecino de Prueba', inquilino: null,
    telefono: '+52 33 1144 1101', email: '', ocupacion: 'Propietario'
  },

  amenidades: [
    {
      id: 'ame_tenis_1', nombre: 'Cancha de tenis 1', tipo: 'tenis',
      abre: '07:00', cierra: '22:00', maxHorasDia: 2, anticipacionDias: 7, mesesBloqueo: 3
    },
    {
      id: 'ame_tenis_2', nombre: 'Cancha de tenis 2', tipo: 'tenis',
      abre: '07:00', cierra: '22:00', maxHorasDia: 2, anticipacionDias: 7, mesesBloqueo: 3
    }
  ],

  capitulosExtra: [
    {
      nombre: 'Canchas de tenis',
      articulos: [
        'Las canchas de tenis son para los residentes y sus invitados. Se apartan con la administración por bloques de una hora, de 7:00 a 22:00 h.',
        'Cada casa puede apartar hasta dos horas al día, con un máximo de siete días de anticipación. Si no van a usar la cancha, deben avisar para liberarla.',
        'Si nadie de la casa llega en los primeros quince minutos de su horario, la cancha queda libre para quien la pida.',
        'Las casas con tres o más mensualidades vencidas no pueden apartar las canchas hasta ponerse al corriente o tener un convenio de pago al día.',
        'Se juega con calzado para tenis de suela lisa. No se permiten bicicletas, patines, mascotas ni alimentos dentro de la cancha.',
        'Los invitados deben ir acompañados por un residente de la casa que apartó. Cada casa responde por los daños que causen sus invitados.'
      ]
    }
  ],

  avisoObra: {
    titulo: 'Cancha de tenis 2 cerrada el lunes por mantenimiento',
    cuerpo: 'El lunes se resanará la superficie y se cambiará la red de la cancha 2. La cancha 1 sigue abierta.\n' +
      'Las reservas de ese día se pasan a la cancha 1 o a otro horario; la administración se comunica con cada casa.'
  },
  avisoHorario: {
    titulo: 'Así se apartan las canchas de tenis',
    cuerpo: 'Por WhatsApp a la administración o en la caseta, con hasta siete días de anticipación y máximo dos horas al día por casa. ' +
      'Se juega de 7:00 a 22:00 h. Si no van a poder ir, avisen para liberar la cancha.'
  },
  temaAsamblea: 'el resanado de las canchas de tenis',
  limpiezaCaja: 'Material de limpieza para las canchas',
  ingresoCaja: ['Reposición de llave del candado de las canchas', 150, 'Canchas'],
  papeleria: 'Papelería Escolar'
};
