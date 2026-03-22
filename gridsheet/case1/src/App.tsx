import React, { useState, useEffect } from 'react';
import { GridSheet, useHub, type HubProps } from '@gridsheet/react-core';

const App: React.FC = () => {
  const [enableDecimalLabeler, setEnableDecimalLabeler] = useState(false);

  const hubProps: HubProps = {
    labelers: {},
  };
  const hub = useHub(hubProps);

  useEffect(() => {
    hubProps.labelers!.decimal = enableDecimalLabeler
      ? (n: number) => String(n)
      : null;
    hub.wire.transmit(hubProps);
  }, [enableDecimalLabeler]);

  return (
    <main>
      <div className="grid-container">
        <GridSheet
          hub={hub}
          initialCells={{
            A1: { value: 'Hello' },
            B1: { value: 'React', style: { backgroundColor: '#00bfff' } },
            A2: { value: 123 },
            B2: { value: 456 },
            A3: { value: 789 },
            C6: { value: '=SUM(A2:B2)' },
            D7: { value: 789 },
            E8: { value: 789 },
            X20: { value: 789 },
          }}
          options={{
            mode: 'dark',
          }}
          sheetName="Sheet1"
        />

        <br />
        <GridSheet
          hub={hub}
          initialCells={{
            C3: { value: '=SUM(Sheet1!A2:B3)' },
            X20: { value: 789 },
            default: { labeler: 'decimal' },
          }}
          options={{}}
          sheetName="Sheet2"
        />
      </div>
      {/* Labeler Control */}
      <div className="labeler-control">
        <label>
          <input
            type="checkbox"
            checked={enableDecimalLabeler}
            onChange={(e) => setEnableDecimalLabeler(e.target.checked)}
          />
          Enable Decimal Labeler for Sheet2
        </label>
      </div>
    </main>
  );
};

export default App;


