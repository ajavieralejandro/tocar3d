import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function LeftAlignedTimeline() {
  return (
    <>
    <h1 className='text-white text-3xl'>Hitos </h1>
    <Timeline
    className='text-white text-xl'
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent >
         2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
        >
          <p className='text-xl'>          Desde una idea general de creación de material pedagógico-didáctico haptico validamos la necesidad contactando organismos e instituciones de personas ciegas para trabajar con ellos de forma colaborativa.
</p>
</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
        <p className='text-xl'>Recibimos el premio de Inovación Cultural desde la Dirección Nacional de Innovación Cultural del Ministerio de Cultura de Nación.
</p>
</TimelineContent>

        
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
        <p className='text-xl'>Comenzamos con las relaciones y alianzas institucionales y los escaneos 3d mediante vuelo de drones, recontrucción SFM, reinterpretación y adaptación haptica,  diseño y desarollo del software, e impresión 3D en pequeña escala para testeos.
</p>


.</TimelineContent>

        
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
        <p className='text-xl'>Escaneo 3d del palacio Barolo con apoyo de la Fundación Amigos del Palacio Barolo
</p>


</TimelineContent>

        
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
        <p className='text-xl'>
        Comenzamos la fabricación del Palacio Barolo Hápitico Impreso en 3D.
          <br /> Comenzamos con el rodaje de TOCAR3D el DOCUMENTAL dirigido y co-producido por la artista Laura Heiss.<br />
        Establecimos una alianza colaborativa con la Biblioteca Argentina Para Ciegos, quienes se encargaron de fabricar la cartelería metálica braille y transmitirnos los requerimientos de una buena audiodescripción, estándares para baja visión y vincular instituciones de personas ciegas para los nuevos tours inclusivos que comenzaron a hacerse en el Palacio Barolo en torno a la impresión 3D haptica del mismo.


        </p>



</TimelineContent>

        
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>

        <TimelineContent>
        <p className='text-xl'>
        Celebramos junto a la Fundación Amigos del Palacio Barolo sus 100 años con la instalación de la impresión 3d de la adaptación háptica de gran tamaño para personas ciegas.

        </p>
        </TimelineContent>

        
      </TimelineItem>

      
     
    </Timeline>
    </>
  );
}