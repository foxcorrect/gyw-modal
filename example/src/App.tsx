import React, { useState } from 'react';
import Modal from '../../src/index';

const App = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>click</button>
            <Modal
                visible={isOpen}
                closeModal={() => setOpen(false)}
                title="123"
            />
        </div>
    )
}

export default App;