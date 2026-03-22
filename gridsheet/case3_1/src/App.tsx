import React, { useState, useEffect } from "react";
//import { GridSheet, useHub, type HubProps } from '@gridsheet/react-core';
import {
  GridSheet,
  useHub,
  makeBorder,
  type HubProps,
} from "../react-core/src/index";

const App: React.FC = () => {
  const [enableDecimalLabeler, setEnableDecimalLabeler] = useState(false);

  const hubProps: HubProps = {
    labelers: {},
    onInit: ({ table }) => {
      console.log(`Table initialized: ${table.sheetName}`);
    },
  };
  const hub = useHub(hubProps);

  useEffect(() => {
    hubProps.labelers!.decimal = enableDecimalLabeler
      ? (n: number) => String(n)
      : null;
    hub.wire.transmit(hubProps);
  }, [enableDecimalLabeler]);

  //style={{ width: 800 }}
  return (
    <main>
      <div className="grid-container">
        <GridSheet
          hub={hub}
          initialCells={{
            /*1
	    '0': {
                  height: 60,  // Header height
                  width: 180,   // Header width
                },
		*/
            A1: { value: "Hello" },
            B1: { value: "React", style: { backgroundColor: "#00bfff" } },
            A2: { value: 123 },
            B2: { value: 456 },
            A3: { value: 789 },
            C6: { value: "=SUM(A2:B2)" },
            D7: { value: 789 },
            E8: { value: 789 },
            X20: { value: 789 },
          }}
          options={
            {
              //mode: 'dark',
            }
          }
          sheetName="Sheet1"
          //style={{ width: 800, height: 300 }}
        />

        <br />
        <GridSheet
          hub={hub}
          initialCells={{
            default: {
              width: 150,
              height: 30,
              style: { fontSize: "14px" },
              default: { labeler: "decimal" },
            },

            C3: { value: "=SUM(Sheet1!A2:B3)" },
            X20: { value: 789 },
	             F: {
                width: 50,
                renderer: 'checkbox',
                style: {
                  backgroundColor: '#f8f9fa',
                },
                alignItems: 'center',
                justifyContent: 'center',
              },
            "A7:F7": {
              style: {
                ...makeBorder({
                  bottom: "4px double #000000",
                }),
              },
            },
            D8: {
              value: "abc",
              style: {
                backgroundColor: "#3498db",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              },
            },
            //default: { labeler: 'decimal' },
          }}
          //style={{ width: 800, height: 300 }}
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
