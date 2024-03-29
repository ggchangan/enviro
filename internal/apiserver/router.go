package apiserver

import (
	"github.com/gin-gonic/gin"

	"github.com/ggchangan/enviro/internal/apiserver/controller/v1/message"
	"github.com/ggchangan/enviro/internal/apiserver/controller/v1/report"
	"github.com/ggchangan/enviro/internal/apiserver/store/mysql"
)

func initRouter(g *gin.Engine) {
	installMiddleware(g)
	installController(g)
}

func installMiddleware(g *gin.Engine) {
}

func installController(g *gin.Engine) *gin.Engine {
	// v1 handlers, requiring authentication
	storeIns, _ := mysql.GetMySQLFactoryOr(nil)
	v1 := g.Group("/v1")
	{
		// report RESTful resource
		reportv1 := v1.Group("/reports")
		{
			reportController := report.NewReportController(storeIns)

			reportv1.POST("", reportController.Create)
			reportv1.DELETE(":id", reportController.Delete) // admin api
			reportv1.GET(":id", reportController.Get)       // admin api
		}

		// report RESTful resource
		reportMessagev1 := v1.Group("/report_messages")
		{
			reportMessageController := message.NewReportMessageController(storeIns)

			reportMessagev1.GET(":id", reportMessageController.Get) // admin api
		}

	}

	return g
}
