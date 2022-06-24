import { ReportHandler } from 'web-vitals';

const REPORT_WEB_VITALS = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { // eslint-disable-line @typescript-eslint/no-floating-promises
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default REPORT_WEB_VITALS;
