import { useState } from 'react';

// Components for each section of the notes
const ComputerSystem = () => (
  <div>
    <h1>Computer System</h1>
    <p>An overview of computer architecture, including the main components such as the CPU, memory, and I/O devices.</p>
  </div>
);

const HardwareAndMotherboardParts = () => (
  <div>
    <h2>Hardware and Motherboard Parts</h2>
    <p>A detailed breakdown of hardware components and the functions and connectivity of motherboard parts.</p>
  </div>
);

const ComputerPorts = () => (
  <div>
    <h2>Computer Ports</h2>
    <p>Exploration of the types of ports and their uses, along with data transfer protocols.</p>
  </div>
);

const BusOrganization = () => (
  <div>
    <h2>External & Internal Bus Organization</h2>
    <p>Insight into bus architecture and its role in communication, including different types of bus systems and standards.</p>
  </div>
);

const FutureOfComputing = () => (
  <div>
    <h2>Future of Computing</h2>
    <p>Discussion on emerging technologies and trends, along with predictions for the evolution of computing systems.</p>
  </div>
);

// Main page component that renders the notes
export default function NotesPage() {
  // State to manage the display of different sections
  const [showSection, setShowSection] = useState({
    computerSystem: true,
    hardwareParts: false,
    computerPorts: false,
    busOrganization: false,
    futureComputing: false,
  });

  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      {showSection.computerSystem && <ComputerSystem />}
      {showSection.hardwareParts && <HardwareAndMotherboardParts />}
      {showSection.computerPorts && <ComputerPorts />}
      {showSection.busOrganization && <BusOrganization />}
      {showSection.futureComputing && <FutureOfComputing />}
    </main>
  );
}
