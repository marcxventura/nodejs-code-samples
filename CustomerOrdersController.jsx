const Responses = require("sabio-web-models").Responses;
const { RoutePrefix, Route } = require("sabio-routing");
const BaseController = require("../BaseController");
const CustomerOrdersService = require("sabio-services").customerOrdersService;

@RoutePrefix("/api/customer/orders")
class CustomerOrdersController extends BaseController {
  constructor() {
    super("CustomerOrdersController");
  }

  @Route("GET", "summary")
  getSummary(req, res, next) {
    let response = null;
    let responseCode = 200;
    const userId = req.user.id;
    const pageIndex = 0;
    const pageSize = 5;

    CustomerOrdersService.selectAll(userId, pageIndex, pageSize)
      .then(customerOrders => {
        if (customerOrders === null) {
          response = new Responses.ErrorResponse("Orders Not Found");
          responseCode = 400;
        } else {
          response = new Responses.ItemsResponse(customerOrders);
        }
        res.status(responseCode).json(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  @Route("GET", ":pageIndex/:pageSize")
  selectAll(req, res, next) {
    let response = null;
    let responseCode = 200;
    const userId = req.user.id;
    const pageIndex = req.params.pageIndex;
    const pageSize = req.params.pageSize;

    CustomerOrdersService.selectAll(userId, pageIndex, pageSize)
      .then(customerOrders => {
        if (customerOrders === null) {
          response = new Responses.ErrorResponse("Orders Not Found");
          responseCode = 400;
        } else {
          response = new Responses.ItemsResponse(customerOrders);
        }
        res.status(responseCode).json(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  @Route("GET", ":pageIndex/:pageSize/:search")
  searchAll(req, res, next) {
    let response = null;
    let responseCode = 200;
    const userId = req.user.id;
    const pageIndex = req.params.pageIndex;
    const pageSize = req.params.pageSize;
    const searchQuery = req.params.search;

    CustomerOrdersService.selectAll(userId, pageIndex, pageSize, searchQuery)
      .then(customerOrders => {
        if (customerOrders === null) {
          response = new Responses.ErrorResponse("Orders Not Found");
          responseCode = 400;
        } else {
          response = new Responses.ItemsResponse(customerOrders);
        }
        res.status(responseCode).json(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  @Route("GET", ":dateStart/:dateEnd/:pageIndex/:pageSize")
  getDateRange(req, res, next) {
    let response = null;
    let responseCode = 200;
    const userId = req.user.id;
    const dateStart = req.params.dateStart;
    const dateEnd = req.params.dateEnd;
    const pageIndex = req.params.pageIndex;
    const pageSize = req.params.pageSize;

    CustomerOrdersService.getDateRange(
      userId,
      dateStart,
      dateEnd,
      pageIndex,
      pageSize
    )
      .then(customerOrders => {
        if (customerOrders === null) {
          response = new Responses.ErrorResponse("Orders Not Found");
          responseCode = 400;
        } else {
          response = new Responses.ItemsResponse(customerOrders);
        }
        res.status(responseCode).json(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  @Route("GET", ":dateStart/:dateEnd/:pageIndex/:pageSize/:search")
  getDateRangeSearch(req, res, next) {
    let response = null;
    let responseCode = 200;
    const userId = req.user.id;
    const dateStart = req.params.dateStart;
    const dateEnd = req.params.dateEnd;
    const pageIndex = req.params.pageIndex;
    const pageSize = req.params.pageSize;
    const search = req.params.search;

    CustomerOrdersService.getDateRange(
      userId,
      dateStart,
      dateEnd,
      pageIndex,
      pageSize,
      search
    )
      .then(customerOrders => {
        if (customerOrders === null) {
          response = new Responses.ErrorResponse("Orders Not Found");
          responseCode = 400;
        } else {
          response = new Responses.ItemsResponse(customerOrders);
        }
        res.status(responseCode).json(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
}

module.exports = { controller: CustomerOrdersController };
