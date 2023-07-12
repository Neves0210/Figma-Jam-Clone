import ReactFlow , { Background, Connection, ConnectionMode, Controls, addEdge, useEdgesState }from 'reactflow';
import {zinc} from  "tailwindcss/colors"
import 'reactflow/dist/style.css';

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';


const NODE_TYPES ={
  square: Square,
}


const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },

  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 1000,
      y: 400,
    },
    data: {},
  },

] satisfies Node[]

function App() {
  const [edges, setEdges, onEdgeChange] = useEdgesState([])

  const onConnect = useCallback((connection: Connection) =>{
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  return (
    <div className='w-screnn h-screen'>
    <ReactFlow
      nodeTypes={NODE_TYPES}
      nodes={INITIAL_NODES}
      edges={edges}
      onEdgesChange={onEdgeChange}
      onConnect={onConnect}
      connectionMode={ConnectionMode.Loose}
      >

      <Background
        gap={12}
        size={2}
        color={zinc[200]}
      />
      <Controls/>
    </ReactFlow>
    </div>
  )
}

export default App