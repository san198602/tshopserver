var Admin = require("../models/Admin.model");
export class AdminController {
    public async createAdmin(req: Request, res: Response) {

        const newAdmin = new Admin({
            username: "santosh001",
            email: "san001@gmail.com",
            password: "san001123456",
            user: "admin@123",
            leaveperiod: "April",
            roles: ["superadmin", "normal admin", "visitor"]

        });
        try {
            const savedAdmin = await newAdmin.save();
            //logger.info('*** Requested for First log... ***' + savedAdmin);

        } catch (error) {

            //   console.error("Error message:" + error.message);


        }


    };


    public async getalladmins(req: Request, res: Response) {
        const myCustomLabels = {
            totalDocs: 'itemCount',
            docs: 'itemsList',
            limit: 'perPage',
            page: 'currentPage',
            nextPage: 'next',
            prevPage: 'prev',
            totalPages: 'pageCount',
            pagingCounter: 'slNo',
            meta: 'paginator',
        };
        const options = {
            page: 1,
            limit: 10,
            collation: {
                locale: 'en',
            },
            customLabels: myCustomLabels,

        };
        try {
            const admin = await Admin.paginate({}, options)

            //  return res.json(admin);
        } catch (err) {
            //  return res.status(400).json({ message: err.message });
        }
    };


    public async getAdminById(req: Request, res: Response) {
        //  var userId = req.params.id;
        // try {
        //     const admin = await Admin.findById(userId);
        //     if (admin) {
        //         console.log('Admin found:', admin);
        //         // return res.json(admin);

        //     } else {
        //         console.log('Admin  not found.');
        //         return null;
        //     }
        // } catch (error) {
        //     console.error('Error finding admin:', error);
        //     throw error;
        // }
    };

    public async updateAdmin(req: Request, res: Response) {

    };
    public async deleteAdmin(req: Request, res: Response) {

        console.log("DASD", +req)

    };


    public async getAdminByParams(req: Request, res: Response) {
        // var userId = req.query.id;
        // try {
        // // const admin = await Admin.findById(userId);
        // if (admin) {
        //  console.log('Admin found:', admin);
        //return res.json(admin);

        //  } else {
        console.log('Admin  not found.');
        return null;
        // }
        // } catch (error) {
        // console.error('Error finding admin:', error);
        // throw error;
        // }
        //  }


    };
}
