angular.module('AppWizard', [])
.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'embedded.home.html',
        controller: 'HomeController'
    }).
    when('/apps', {
        templateUrl: 'embedded.apps.html',
        controller: 'HomeController'
    }).
    when('/question/:questId', {
        templateUrl: 'embedded.question.html',
        controller: 'QuestionController'
    }).
    when('/collection/:collId', {
        templateUrl: 'embedded.collection.html',
        controller: 'CollectionController'
    }).
    otherwise({
        redirectTo: '/home'
    });
})
.controller('AppCtrl', function ($scope) {
  $scope.pageName = 'home';
})
.controller('HomeController', function ($scope) {
  $scope.$parent.pageName = 'home';
})
.controller('QuestionController', function ($scope, $routeParams) {
  var arr1 = [1, 2],
      arr2 = [4, 5, 6, 7],
      curr2 = $routeParams.questId.split("").pop(),
      new2 = curr2,
      getran2 = function() {
        while (new2 == curr2) {
          new2 = Math.floor(Math.random()*4)+4;
        }
        return new2;
      };

  if ($routeParams.questId == 'random1') {
    window.location.hash = '/question/quest'+(Math.floor(Math.random()*2)+1);;
  }

	$scope.$parent.pageName = 'question';
  $scope.selected = $routeParams.questId;
  $scope.questions = {
    quest1: {
      q: 'Does your business have employees?',
      a: [
        { target: 'random2', value: 'Yes' },
        { target: 'quest3', value: 'No' }
      ]
    },
    quest2:  {
      q: 'Does your business need funding?',
      a: [
        { value: 'Yes', collId: 'capital' },
        { value: 'No', collId: 'success' }
      ]
    },
    quest3:  {
      q: 'Do you hire independent contractors?',
      a: [
        { value: 'Yes', collId: '1099' },
        { target: 'quest2', value: 'No' }
      ]
    },
    quest4:  {
      q: 'Do you need to track your employees\' time?',
      a: [
        { value: 'Yes', collId: 'track' },
        { target: 'random2', value: 'No' }
      ]
    },
    quest5:  {
      q: 'Do you need to schedule your employees?',
      a: [
        { value: 'Yes', collId: 'schedule' },
        { target: 'random2', value: 'No' }
      ]
    },
    quest6:  {
      q: 'Are you interested in HR apps that help you manage your staff?',
      a: [
        { value: 'Yes', collId: 'hr' },
        { target: 'random2', value: 'No' }
      ]
    },
    quest7:  {
      q: 'Do you need a payroll service?',
      a: [
        { value: 'Yes', collId: 'payroll' },
        { target: 'random2', value: 'No' }
      ]
    }
	};
  $scope.getUrl = function(q) {
    if (q.collId) {
      return '#/collection/'+q.collId;
    } else if (q.target == 'random1') {
      return '#/question/quest'+(Math.floor(Math.random()*2)+1);
    } else if (q.target == 'random2') {
      return '#/question/quest'+getran2();
    } else {
      return '#/question/'+q.target
    }
  };
})
.controller('CollectionController', function ($scope, $routeParams) {
  $scope.$parent.pageName = 'collection';
  $scope.selected = $routeParams.collId;
  $scope.collections = {
    1099: {
      msg: 'Perhaps these apps will help you manage 1099s?',
      next: 'quest2',
      apps: {
        app1: {
          name: 'Intuit 1099 E-File Service',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/bfuudxvwj/Submitted55/Intuit1099_icon.png',
          tagline: 'Electronically file 1099-MISC forms in minutes!',
          description: 'The Intuit 1099 E-File Service makes it EASY for small businesses to create & e-file 1099-MISC forms.',
          pricing: 'Pricing starts at $14.99, which includes 3 forms. Additional forms are $3.99 each.',
          review: 'So much easier than ordering the forms and then having to print and mail them. Also the price is very reasonable',
          rating: 3,
          video: 'image.png'
        },
        app2:  {
          name: '1099 MISC e-file by Tax1099.com',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nigcbq4n/Submitted15/tax1099-logo-qbapps.png',
          tagline: 'E-File your year-end forms easily and quickly!',
          description: 'Tax1099.com offers unmatched features for small business and accountant users. Whether you have a handful of 1099s, thousands of 1099s, or a host of clients who need to file 1099s, we can help!',
          pricing: 'Pricing starts at $2.99 per-efiled 1099, 1098, or W2 form. As you file more forms, the cost per form e-filed decreases to a low of $0.55.',
          review: 'Excellent features. Very comparable price. Year round availability. And best of all is Tax1099.com built in TIN match and W-9 features that make this product a life saver when it comes to B-notices and vendor compliance.',
          rating: 5,
          video: 'image.png'
        }
      }
    },
    track: {
      msg: 'Wh00t! We\'ve got some time-tracking apps for you.',
      next: 'quest7',
      apps: {
        app1: {
          name: 'Homebase',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qatvctq4/Submitted23/LogoName.jpg',
          tagline: 'Homebase is the easiest way to track hours & schedule - for free!',
          description: 'Homebase is the easiest way to track hours and schedule your team. Our free tools are used by thousands of local businesses to save time, eliminate headaches, and create happier teams.',
          pricing: 'Simple monthly pricing starts at $9.95 per month.',
          review: 'I have only been using this app a short time to track employee time, and it was a fast and easy integration… The core features are free, so give it a try!',
          rating: 4,
          video: 'image.png'
        },
        app2:  {
          name: 'TSheets Time Tracking',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7ms3t7i3r/Submitted50/TSheetsTLogo.png',
          tagline: 'Time tracking and scheduling with GPS. Simple timesheets for payroll.',
          description: 'Time tracking and scheduling for hourly employees. Get rid of that old punch time clock and simplify payroll, invoicing & job costing.',
          pricing: 'Annual subscriptions starting at $8 a month.',
          review: 'TSheets makes me look like a genius to my boss and accounting loves me for saving them so much time and money.',
          rating: 5,
          video: 'image.png'
        },
        app3:  {
          name: 'Time Tracker by eBility',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nmk6iwdy/Submitted121/appcardlogo.png',
          tagline: 'Easy time tracking for faster QuickBooks billing and payroll.',
          description: 'Track your team\'s hours and instantly sync approved time entries to QuickBooks for billing and payroll.',
          pricing: '$4 per user/month + $11.95 base fee/month',
          review: 'The ebility team has done a great job with this app. I particularly like the ease of use and the level of detail that you can apply to track time and expenses.',
          rating: 4.5,
          video: 'image.png'
        },
        app4:  {
          name: 'ClockShark Time Tracking',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7p2ar5646/Submitted37/Logo_150_sq.png',
          tagline: 'Easy Mobile Time Tracking for Construction and Field Service',
          description: 'Ditch the paper time cards. Automate your time tracking with easy GPS-enabled mobile apps and a cloud dashboard. Integrates directly with QuickBooks Online for quick, painless payroll. Schedule employees using an easy drag-and-drop scheduler.',
          pricing: '$5/month per employee plus $45 monthly base fee per account',
          review: 'As a CPA and QuickBooks ProAdvisor, I researched dozens of electronic time card apps before selecting Clock Shark. These guys put the most thought into making a comprehensive solution that\'s super easy for my field employees. ',
          rating: 5,
          video: 'image.png'
        },
        app5:  {
          name: 'BigTime',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7mwds2xdp/Submitted33/LogoName.png',
          tagline: 'Track time, projects and expenses online with the leader in QuickBooks integration.',
          description: 'BigTime, a QuickBooks Gold-Certified developer, focuses on selling and supporting just one product: An intuitive timesheet and billing app used by thousands of professional services firms.',
          pricing: '14-day risk-free trial. Pricing starts at $5.60 per user, per month.',
          review: 'I have tried many apps for time entry and BigTime is by far the best. BigTime is also top notch in customer service.',
          rating: 4,
          video: 'image.png'
        }
      }
    },
    schedule: {
      msg: 'Well then, we\'ve got some apps for you!',
      next: 'quest6',
      apps: {
        app3: {
          name: 'NimbleSchedule',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nqbgjsh7/Submitted10/nimble4.png',
          tagline: 'Easy Employee Scheduling plus Time and Attendance Software',
          description: 'NimbleSchedule is an intuitive, web-based workforce management solution that provides immediate benefits by reducing labor costs, improving communications and maximizing productivity. Our speedy solution offers best-of-class functionality.',
          pricing: 'Pricing as low as $1 per employee/month',
          review: 'I thought I was alive, but then I got NimbleSchedule. Now I realize I was living in a lie. #BornAgain #LoveYouNimbleSchedule',
          rating: 4,
          video: 'image.png'
        },
        how:  {
          name: 'Deputy.com',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nmcnkqd7/Submitted10/qb150.png',
          tagline: 'Employee Scheduling and Time tracking with easy QuickBooks integration',
          description: 'All-in-one cloud based employee management software. Manage schedules and timesheets with seamless QuickBooks online integration. Manage overtime, fatigue, tasks, communication and staff KPIs. Free 30 day trial when you sign up!',
          pricing: 'Pricing starts at only $1 per employee per week. Billed monthly with no minimum fee. No setup costs.',
          review: 'Pros: Drag and drop scheduling; employees get emails/texts with shift information; weather forecasts for work locations. Cons: mobile app didn\'t seem to be updating; I couldn\'t figure out how to see who was on the clock. Overall, good app.',
          rating: 4,
          video: 'image.png'
        },
        where:  {
          name: 'TSheets Time Tracking',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7ms3t7i3r/Submitted50/TSheetsTLogo.png',
          tagline: 'Time tracking and scheduling with GPS. Simple timesheets for payroll.',
          description: 'Time tracking and scheduling for hourly employees. Get rid of that old punch time clock and simplify payroll, invoicing & job costing.',
          pricing: 'Annual subscriptions starting at $8 a month.',
          review: 'TSheets makes me look like a genius to my boss and accounting loves me for saving them so much time and money.',
          rating: 5,
          video: 'image.png'
        }
      }
    },
    hr: {
      msg: 'Check out these magical HR apps!',
      next: 'quest2',
      apps: {
        app1: {
          name: 'Performance Reviews by JuvodHR',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7n32fjyz2/Submitted130/Juvod%20Logo%20Square.png',
          tagline: 'Keep good employees. Protect your company from the bad ones.',
          description: 'The ideal mobile HR employee management software app. Engage employees with consistent feedback. No training needed.',
          pricing: '14 Day Free Trial. No credit card required. Cancel anytime. Plans start at $11.25 per month.',
          review: 'I created job descriptions and did performance appraisals fast. My managers and employees oth love this app.',
          rating: 5,
          video: 'image.png'
        },
        how:  {
          name: 'HRweb',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nmzz7fd8/Submitted22/LogoName.JPG',
          tagline: 'Complete Workforce Management',
          description: 'HRweb automates HR processes allowing you to manage your workforce more effectively. HRweb includes employee benefit tracking, PTO (leave) tracking, employe reviews, recruitment, and it\'s integrated with QuickBooks Online.',
          pricing: 'Subscription plans start at $39.95 per month for up to 10 employees.',
          review: 'This is one of the best human resource tools I\'ve used to keep track of my team.',
          rating: 5,
          video: 'image.png'
        },
        where:  {
          name: 'GoBenefits',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qycrideh/Submitted14/LogoName.png',
          tagline: 'Group health plans you can AFFORD and your employees will LOVE',
          description: 'Sign up for employee group health insurance instantly - No paperwork!! GoBenefits is a national insurance agency and insurance quoting and enrollment platform designed exclusively for small businesses with 1-100 employees.',
          pricing: 'Free for up to 100 employees',
          review: 'GoBenefits made our health insurance options easy to decipher and convenient to select! We\'ve been pleased with our choices and plan to use the platform again!! Way to go!!',
          rating: 5,
          video: 'image.png'
        },
        app4:  {
          name: 'Braidio',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7q7khkjqz/Submitted13/LogoName.png',
          tagline: 'Collaborative learning for today\'s workforce',
          description: 'Learning delivery your employees will actually use, at a fraction of the cost of traditional (and under-utilized) training tools.',
          pricing: 'Pricing starts at $4.00 per month, per user.',
          review: 'This makes perfect sense! Braidio is a great way to get employees easy, intuitive access to collaborative cloud-based learning that works.',
          rating: 5,
          video: 'image.png'
        }
      }
    },
    payroll: {
      msg: 'Hey, look! Some payroll apps just for you!',
      next: 'quest5',
      apps: {
        app5: {
          name: 'Gusto',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7pnhdevpa/Submitted46/LogoName.png',
          tagline: 'Payroll, compliance and benefits made for the web.',
          description: 'Gusto is the easiest way to pay employees and contractors. As a full-service payroll service, we take care of all payroll tax payments and filings on your behalf. Every time you run payroll, total wages and taxes are synced with QuickBooks Online.',
          pricing: 'Pricing starts at $29 per month, 2 months after you run your first payroll.',
          review: 'I manage finance functions for several Silicon Valley startups. Payroll doesn\'t get any better than Zenpayroll. It is super easy to setup from scratch. If all employees are salaried, Zenpayroll can be put on autopilot so it automatically runs each pay period.',
          rating: 4.5,
          video: 'image.png'
        },
        how:  {
          name: 'Wagepoint',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qfiij7u3/Submitted14/LogoName.png',
          tagline: 'Simple, fast & friendly payroll software for small businesses.',
          description: 'Wagepoint is online payroll software backed by the world\'s friendliest team and trusted by 1000\'s of small businesses just like you.',
          pricing: '$15 base fee + $2 per employee, per payroll',
          review: 'This application has been pivotal in increasing the efficiency of my boutique bookkeeping practice.',
          rating: 5,
          video: 'image.png'
        }
      }
    },
    capital: {
      msg: 'Good news!  QuickBooks apps can help you raise capital and collect payments.',
      next: 'quest1',
      apps: {
        app5: {
          name: 'QuickBooks Financing',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7p7ffaiwf/Submitted12/LogoName.png',
          tagline: 'QuickBooks Financing from Intuit makes it easy to find business funding.',
          description: 'QuickBooks Financing from Intuit uses your QuickBooks data to find the right funding at the best rates to grow your business. We work with trusted partners to make it easy to match you with the right provider and get funding in as fast as one day.',
          pricing: 'This app is FREE!',
          review: 'Worked well and easy to use. The sync with QB is smooth. Payment is always fast and the customer service is very good.',
          rating: 5,
          video: 'image.png'
        },
        how:  {
          name: 'Fundbox',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nu9v3qp8/Submitted103/logo3_150x150.png',
          tagline: 'Get Paid for Your Outstanding Invoices Instantly',
          description: 'Fundbox is the fastest and easiest way to get an advance on your outstanding invoices. Say Goodbye to Net 30/60/90. Say Hello to Net NOW. Take control of your cash flow and get paid on available invoices with Fundbox.',
          pricing: 'The clearing fee is set per invoice.',
          review: 'Fundbox is a great app and it\'s easy to use! I love using it for my own business and will definitely recommend it to my clients! The best part is when I do need the extra cash, the money clears in almost 24 hours.',
          rating: 5,
          video: 'image.png'
        },
        who:  {
          name: 'Fundera',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qb9h65q8/Submitted26/logo_primary.jpg',
          tagline: 'Discover available loan options and secure the best offers, all in one place.',
          description: 'Fundera is the easiest way to find and secure a small business loan. With one application, you can apply to multiple lenders, ensuring you get the lowest cost loan in the fastest amount of time.',
          pricing: 'Fundera is a FREE service',
          review: 'I can\'t think of one way this funding experience could have been better. Up until the money was in my account, I actually thought it was too good to be true.',
               rating: 5,
          video: 'image.png'
        }
      }
    },
    success: {
      msg: 'Hey, look! Some payroll apps just for you!',
      next: 'quest1',
      apps: {
        app5: {
          name: 'Fiscal Checkup',
          icon: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qvjcmwer/Submitted15/LogoName.png',
          tagline: 'In-Depth Fiscal Analysis, with Business Valuation in 30 minutes for $495',
          description: 'Fiscal Checkup is a web-based software tool that provides businesses with a powerful, comprehensive financial analysis, empowering companies to improve cash flow and profitability.',
          pricing: 'Only $495 per company per fiscal year.',
          review: 'I used this as part of a business valuation for my client looking to do estate planning. It saved me a lot of time upfront and they appreciated going through parts of the report with me.',
          rating: 5,
          video: 'image.png'
        }
      }
    }
  };
});
