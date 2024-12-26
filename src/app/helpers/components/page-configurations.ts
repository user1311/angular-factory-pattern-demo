import { ModuleType, TaskType } from "./page-configurations-enums";

export const StaticData = {
    modules: [
      {
        id: ModuleType.Purchase_Receipts,
        title: 'Module 1 Title',
        subtitle: 'Module 1 Subtitle',
        isRequired: true,
        isCompleted: false,
        tasks: [
          {
            id: TaskType.newreceipts,
            title: '1. New Receipts',
            taskName: 'New Receipts',
            taskDescription: 'Review New Purchase Receipt List',
            urgency: 'High',
            frequency: 'Daily',
            todo: [
                "Review each Purchase receipt.",
                "At EOM, this list should only be items that have been ordered and not yet received.",
                "Delete PRs that are no longer valid.",
                "Receive PRs as materials are received."
            ]
          },
          {
            id: TaskType.receivedreceipts,
            title: '2. Received Receipts',
            taskName: 'Received Receipts',
            taskDescription: 'Review Received Purchase Receipt List',
            urgency: 'Low',
            frequency: 'Weekly',
            todo: [
                "Once the invoice has beem received from the vendor the PR should be Approved for Accounting",
                "It is important that received PRs be approved for accounting in the same month if at all possible."
            ]
          },
          {
            id: TaskType.approvedreceipts,
            title: '3. Approved Receipts',
            taskName: 'Approved Receipts',
            taskDescription: 'Review New Purchase Receipt List',
            urgency: 'Low',
            frequency: 'Daily',
            todo: [
              "Review each Purchase receipt.",
              "At EOM, this list should only be items that have been ordered and not yet received.",
              "Delete PRs that are no longer valid.",
              "Receive PRs as materials are received"
            ]
          },
        ],
      },
      {
        id: ModuleType.Purchase_Receipts,
        title: 'Module 2 Title',
        subtitle: 'Module 2 Subtitle',
        isRequired: false,
        isCompleted: true,
        tasks: [
          {
            id: "card",
            title: 'Task 3 Title',
            taskName: 'Task 3 Name',
            taskDescription: 'Task 3 Description',
            urgency: 'Medium',
            frequency: 'Monthly',
          },
        ],
      },
    ],
  };