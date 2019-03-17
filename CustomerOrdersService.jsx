const { dataProvider, TYPES } = require("sabio-data");

class CustomerOrdersService {
  selectAll(id, pageIndex, pageSize, searchQuery) {
    let procName = "dbo.Orders_GetByCustomer";
    let returnParamMapper = null;

    let results = null;

    return new Promise(promiseExecutor);

    function promiseExecutor(resolve, reject) {
      dataProvider.executeCmd(
        procName,
        inputParamMapper,
        singleRecordMapper,
        returnParamMapper,
        onComplete
      );

      function inputParamMapper(sqlParameters) {
        sqlParameters.addParameter("Id", TYPES.Int, id);
        sqlParameters.addParameter("PageIndex", TYPES.Int, pageIndex);
        sqlParameters.addParameter("PageSize", TYPES.Int, pageSize);
        sqlParameters.addParameter("SearchQuery", TYPES.NVarChar, searchQuery);
      }

      function singleRecordMapper(record, resultset) {
        if (results === null) {
          results = [];
        }
        results.push(record);
      }

      function onComplete(err) {
        if (err) {
          reject(err);
          return;
        }

        resolve(results);
      }
    }
  }

  getDateRange(id, dateStart, dateEnd, pageIndex, pageSize, searchQuery) {
    let procName = "dbo.Orders_GetByCustomerOrderDate";
    let returnParamMapper = null;

    let results = null;

    return new Promise(promiseExecutor);

    function promiseExecutor(resolve, reject) {
      dataProvider.executeCmd(
        procName,
        inputParamMapper,
        singleRecordMapper,
        returnParamMapper,
        onComplete
      );

      function inputParamMapper(sqlParameters) {
        sqlParameters.addParameter("Id", TYPES.Int, id);
        sqlParameters.addParameter("DateStart", TYPES.Date, dateStart);
        sqlParameters.addParameter("DateEnd", TYPES.Date, dateEnd);
        sqlParameters.addParameter("PageIndex", TYPES.Int, pageIndex);
        sqlParameters.addParameter("PageSize", TYPES.Int, pageSize);
        sqlParameters.addParameter("SearchQuery", TYPES.NVarChar, searchQuery);
      }

      function singleRecordMapper(record, resultset) {
        if (results === null) {
          results = [];
        }
        results.push(record);
      }

      function onComplete(err) {
        if (err) {
          reject(err);
          return;
        }

        resolve(results);
      }
    }
  }
}

const customerOrdersService = new CustomerOrdersService();

module.exports = customerOrdersService;
