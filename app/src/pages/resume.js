import TableComponent from '@/components/Table';
import Head from 'next/head';
import styles from '../styles/Resume.module.css';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import api from '../service/api';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Chart from '../components/Chart';

export default function Resume() {
  const cookies = new Cookies();
  const [registers, setRegisters] = useState('');
  const [graphicData, setGraphicData] = useState([]);
  const [categorizedData, setCategorizedData] = useState([]);

  const headers = [
    'id',
    'Data de Registro',
    'Valor',
    'Categoria',
    'Tipo',
    'Ações',
  ];

  const id = cookies.get('user_id');

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
    useEffect(() => {
      {
        api.get(`register/client/${id}`).then((res) => {
          setRegisters(res.data);
        }).catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        });

        api.get(`/register/client/graphs/${id}`).then((res) => {
          const incomeData = res.data
            .filter((item) => item.revenue_type === 'Income')
            .map((item) => ({
              x: new Date(item.register_date).toLocaleDateString('pt-BR'),
              y: item.total_value,
            }));

          const outcomeData = res.data
            .filter((item) => item.revenue_type === 'Outcome')
            .map((item) => ({
              x: new Date(item.register_date).toLocaleDateString('pt-BR'),
              y: item.total_value,
            }));

          const mergedData = [...incomeData, ...outcomeData];
          const data = {
            labels: mergedData.map((item) => item.x),
            datasets: [
              {
                label: 'Income',
                data: incomeData.map((item) => item.y),
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
              {
                label: 'Outcome',
                data: outcomeData.map((item) => item.y),
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1,
              },
            ],
          };
          setGraphicData(data);
        }).catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        });
      }
    }, [id]);

  return (
    <div>
      <Head>
        <title>Resume</title>
      </Head>
      <main>
        {id && (
          <>
            <div className={styles['first-row']}>
              <div className={styles['resume-container']}>
                <div className={styles['resume-header']}>Resume</div>
                <div className={styles['resume-history']}>
                  {id && (
                    <TableComponent
                      headers={headers}
                      datas={registers}
                      actions={true}
                    ></TableComponent>
                  )}
                </div>
              </div>
              <div className={styles['register-container']}>
                <Link href='/register'>
                  <button className={styles['new-register-btn']}>
                    Registrar
                  </button>
                </Link>
                <div className={styles['resume-graphics']}>
                  <div className={styles['graphic-filter']}>
                    <FontAwesomeIcon icon={faFilter} />
                  </div>
                  <div className={styles['graphic']}>
                    {graphicData && (
                      <Chart type='bar' data={graphicData} options={options} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['second-row']}>
              <div className={styles['revenue-type-graphics']}>
                <div className={styles['revenue-income']}>
                  {graphicData && (
                    <Chart type='pie' data={graphicData} options={options} />
                  )}
                </div>
                <div className={styles['revenue-outcome']}>
                  {graphicData && (
                    <Chart type='pie' data={graphicData} options={options} />
                  )}
                </div>
              </div>
              <div className={styles['balance']}></div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
