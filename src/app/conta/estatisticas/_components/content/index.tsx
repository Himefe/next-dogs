"use client";

import styles from "./statistics-content.module.css";
import { VictoryPie } from "victory";

export type StatisticsContentProps = {
    total: number;
    graph: Array<{ x: string; y: number }>;
};

const StatisticsContent = ({ total, graph }: StatisticsContentProps) => {
    return (
        <div className={`${styles.grafico} anime-left`}>
            <div className={`${styles.total} ${styles["grafico-item"]}`}>
                <p>Acessos: {total}</p>
            </div>
            <div className={styles["grafico-item"]}>
                {!!graph.length ? (
                    <VictoryPie
                        data={graph}
                        innerRadius={50}
                        padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                        colorScale="red"
                        name="total"
                        style={{
                            data: {
                                fillOpacity: 0.9,
                                stroke: "#fff",
                                strokeWidth: 2,
                            },
                            labels: {
                                fontSize: 14,
                                fill: "#333",
                            },
                        }}
                    />
                ) : (
                    <p className={styles["no-data-text"]}>Não há dados.</p>
                )}
            </div>
            <div className={styles["grafico-item"]}>
                {!!graph.length ? (
                    <VictoryPie
                        data={graph}
                        innerRadius={50}
                        padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                        colorScale="red"
                        name="total"
                        style={{
                            data: {
                                fillOpacity: 0.9,
                                stroke: "#fff",
                                strokeWidth: 2,
                            },
                            labels: {
                                fontSize: 14,
                                fill: "#333",
                            },
                        }}
                    />
                ) : (
                    <p className={styles["no-data-text"]}>Não há dados.</p>
                )}
            </div>
        </div>
    );
};

export default StatisticsContent;
