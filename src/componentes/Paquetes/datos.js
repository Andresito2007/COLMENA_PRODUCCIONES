import { Sparkles, Star, Crown, Heart, PartyPopper, GlassWater } from 'lucide-react'

// PRINCIPIO OPEN CLOSE : ABIERTO A RECIBIR NUEVOS PAQUETES SIN MODIFICAR EL CODIGO
const paquetes = [
  // PAQUETE BASICO
  {
    nombre:'BASICO',
    precio:100,
    icon:Sparkles,
    color:'#6b7280',
    bg:'#f3f4f6',
    desc:'PERFECTO PARA EVENTOS PEQUEÑOS',
    incluye:[
      'DECORACION SENCILLA',
      'SALON POR 4 HORAS',
      'CATERING BASICO',
      'ANIMADOR TIPO OCHUPE'
    ],
  },
   // PAQUETE PREMIUN
  {
    nombre: 'PREMIUN',
    precio: 250,
    icon: Star,
    color: '#d97706',
    bg: '#fef3c7',
    desc: 'IDEAL PARA CELEBRACIONES CON ARTO PUNCHE',
    incluye: [
      'DECORACION MODERNA',
      'SALON POR 8 HORAS',
      'CATERING COMPLETO',
      'DJ en vivo',
      'Fotografía'
    ],
    popular: true,
  },
  {
    nombre: 'VIP',
    precio: 500,
    icon: Crown,
    color: '#A44949',
    bg: '#fce7e7',
    desc: 'IDEAL PARA CELEBRACIONES QUE MARCAN UN HECHO EN LA PERSONA.',
    incluye: [
      'DECORACION DE LUJO',
      'SALON COMPLETO TODO UN DIA',
      'CATERING EXCLUSIVO',
      'ORQUESTA',
      'VIDEOS Y FOTOS ',
      'FlORERIA',
      'BAILARINES'
    ],
  },
  {
    nombre: 'BODA',
    precio: 600,
    icon: Heart,
    color: '#dc2626',
    bg: '#fee2e2',
    desc: 'PAQUETE ESPECIAL PARA BODAS INOLVIDABLES',
    incluye: [
      'DECORACION ROMANTICA',
      'SALON EXCLUSIVO',
      'CATERING GOURMET',
      'MESA DE POSTRES',
      'MUSICA EN VIVO',
      'FOTOGRAFIA Y VIDEO',
    ],
  },
  {
    nombre: 'FIESTA',
    precio: 180,
    icon: PartyPopper,
    color: '#A44949',
    bg: '#fce7e7',
    desc: 'PARA FIESTAS DIVERTIDAS Y LLENAS DE ENERGIA',
    incluye: [
      'DECORACION TEMATICA',
      'SALON POR 5 HORAS',
      'CATERING VARIADO',
      'DJ Y LUCES',
      'HORA LOCA',
    ],
  },
  {
    nombre: 'CORPORATIVO',
    precio: 350,
    icon: GlassWater,
    color: '#0f766e',
    bg: '#ccfbf1',
    desc: 'EVENTOS EMPRESARIALES Y COCKTAILS EJECUTIVOS',
    incluye: [
      'SALON EJECUTIVO',
      'CATERING PREMIUM',
      'EQUIPO DE SONIDO',
      'PROYECTOR Y PANTALLA',
      'COFFEE BREAK',
      'MESAS DE NETWORKING',
    ],
  },
]

export default paquetes
