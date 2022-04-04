import SuppliersList from "./Suppliers List/SuppliersList";
import './Suppliers List/SuppliersList.css'
import { useState } from 'react';
import {data} from "./Data/Data"

function App() {
  const [suppliers, setSupplier] = useState(data);
  const handleClear = () => setSupplier([]);
  const handleAdd = () => {
    const object = {
      id: 123,
      companyName: "Cagla's Software Company",
      contactName: "Esin Cagla Kiral",
      address: {
        city: "İstanbul",
      },
  }
    if (!suppliers.some((supplier) => supplier.id === object.id)) {
      setSupplier([...suppliers, object]);
    }
  };
  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>ContactName</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {
               suppliers.map(supplier => (
                    <tr key={supplier.id}>
                        <td>{supplier.id}</td>
                        <td>{supplier.companyName}</td>
                        <td>{supplier.contactName}</td>
                        <td>{supplier.address?.city}</td>
                    </tr>
                ))
            }
        </tbody>
    </table >
    
    <>
      {suppliers.length > 0 ? <SuppliersList suppliers={suppliers}/> : <h1>Data Bulunmamaktadir!</h1>}
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>
    </>
    </div>
  );
}

export default App;
