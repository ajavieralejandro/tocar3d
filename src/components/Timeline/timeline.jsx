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
    <h1 className='text-white text-xl'>Nuestro Roadmap: </h1>
    <Timeline
    className='text-white'
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
        <TimelineContent>Empezamos a buscar necesidad, transmitir la misión al público beneficiario(personas ciegas) para trabajar con ellos de forma colaborativa.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Recibimos premio de Inovación cultural desde la dirección nacional de innovación cultural del ministerio de cultura de Nación.</TimelineContent>

        
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Comenzamos con las relaciones y alianzas institucionales también comenzaron los escaneos 3d's con vuelos de drones, también el diseño y desarollo del software.

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

        <TimelineContent>Escaneo 3d del palacio Barolo con ayuda de la Funcación Amigos del Palacio Barolo


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

        <TimelineContent>Comenzamos la fabricación del palacio Barolo Hápitico. Comenzamos el rodaje de TOCAR3D el DOCUMENTAL con la Artista Laura Heiss como Directora y Co-productora


</TimelineContent>

        
      </TimelineItem>
      <TimelineItem>
        
        
        <TimelineOppositeContent >
        2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>

        <TimelineContent>Celebramos junto a la Fundación Amigos del Palacio Barolo los 100 años del palacio barolo con la instalación de la impresión 3d del pacialo barolo háptico para personas ciegas.
         Se establece una alianza con la Biblioteca Argentina Para Ciegos

        </TimelineContent>

        
      </TimelineItem>

      
     
    </Timeline>
    </>
  );
}