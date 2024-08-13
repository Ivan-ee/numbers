import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Test = () => {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        {
            id: 1,
            title: "GetBox",
            subtitle: "Сайт аренды боксов для хранения вещей",
            url: "https://getboxx.ru/"
        },
        {
            id: 2,
            title: "Another Site",
            subtitle: "Другой сайт для просмотра",
            url: "http://localhost:5173/"
        },

    ];

    return (
        <div className="page-container test">
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layoutId={String(item.id)}
                    onClick={() => setSelectedId(item.id)}
                    className="item"
                    style={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        marginBottom: "10px",
                        cursor: "pointer"
                    }}
                >
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={String(selectedId)}
                        className="modal"
                    >
                        <motion.button
                            onClick={() => setSelectedId(null)}
                            style={{marginBottom: "10px"}}
                        >
                            Close
                        </motion.button>

                        <motion.iframe
                            src={items.find(item => item.id === selectedId)?.url}
                            className={'iframe'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
