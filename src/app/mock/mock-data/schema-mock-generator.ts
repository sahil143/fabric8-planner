/*
 * This class contains mock generator code for a test schema/model
 * and needed entities like WorkItemType, WorkItemLinkType or
 * LinkCategories.
 */
export class SchemaMockGenerator {

  // the schema is static data, so we cache it here.
  private workItemTypes: any;
  private workItemLinkTypes: any;
  private linkCategories: any;

  /*
   * Creates the link categories structure.
   */
  public getLinkCategories(): any {
    if (this.linkCategories)
      return this.linkCategories;
    else {
      this.linkCategories = {
        'data': this.getWorkItemLinkTypes().included,
        'meta': {
          'totalCount': this.getWorkItemLinkTypes().included.length
        }
      };
      return this.linkCategories;
    }
  }

  /*
   * Creates the work item link types structure.
   */
  public getWorkItemLinkTypes(): any {
    if (this.workItemLinkTypes)
      return this.workItemLinkTypes;
    else {
      this.workItemLinkTypes = {
        'data': [
          {
            'id': 'wilt-0',
            'attributes': {
              'description': 'A mock work item link type',
              'forward_name': 'tests',
              'name': 'mock-tested-by',
              'reverse_name': 'tested by',
              'topology': 'network',
              'version': 0
            },
            'links': {
              'self': 'http://mock.service/api/workitemlinkcategories/wil-0'
            },
            'relationships': {
              'link_category': {
                'data': {
                  'id': 'wilt-cat-0',
                  'type': 'workitemlinkcategories'
                }
              },
            },
            'type': 'workitemlinktypes'
          }
        ],
        'included': [
          {
            'id': 'wilt-cat-0',
            'type': 'workitemlinkcategories',
            'attributes': {
              'description': 'The system category is reserved for link types that are to be manipulated by the system only.',
              'name': 'system',
              'version': 38
            }
          }
        ],
        'meta': {
          'totalCount': 1
        }
      };
      return this.workItemLinkTypes;
    }
  }

  /*
   * Creates the work item types structure.
   */
  public getWorkItemTypes(): any[] {
    if (this.workItemTypes)
      return this.workItemTypes;
    else {
      this.workItemTypes = [{"attributes":{"created-at":"2017-04-13T21:15:14.425446Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-bug","name":"Bug","updated-at":"2017-07-26T20:27:36.290966Z","version":0},"id":"26787039-b68f-4e28-8814-c2f93be1ef4e","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.396641Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-tasks","name":"Task","updated-at":"2017-07-26T20:27:36.294455Z","version":0},"id":"bbf35418-04b6-426c-a60b-7f80beb0b624","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.420849Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-puzzle-piece","name":"Feature","updated-at":"2017-07-26T20:27:36.297708Z","version":0},"id":"0a24d3c2-e0a6-4686-8051-ec0ea1915a28","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.415728Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-bolt","name":"Scenario","updated-at":"2017-07-26T20:27:36.300998Z","version":0},"id":"71171e90-6d35-498f-a6a7-2083b5267c18","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.401293Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-diamond","name":"Value Proposition","updated-at":"2017-07-26T20:27:36.304163Z","version":0},"id":"3194ab60-855b-4155-9005-9dce4a05f1eb","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.411092Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-map","name":"Experience","updated-at":"2017-07-26T20:27:36.307639Z","version":0},"id":"b9a71831-c803-4f66-8774-4193fffd1311","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-27T20:08:22.090067Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-scissors","name":"Papercuts","updated-at":"2017-07-26T20:27:36.314211Z","version":0},"id":"6d603ab4-7c5e-4c5f-bba8-a3ba9d370985","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.40644Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-university","name":"Fundamental","updated-at":"2017-07-26T20:27:36.310986Z","version":0},"id":"ee7ca005-f81d-4eea-9b9b-1965df0988d0","type":"workitemtypes"},{"attributes":{"created-at":"2017-04-13T21:15:14.40644Z","description":"","fields":{"system.area":{"description":"The area to which the work item belongs","label":"Area","required":false,"type":{"kind":"area"}},"system.assignees":{"description":"The users that are assigned to the work item","label":"Assignees","required":false,"type":{"componentType":"user","kind":"list"}},"system.codebase":{"description":"Contains codebase attributes to which this WI belongs to","label":"Codebase","required":false,"type":{"kind":"codebase"}},"system.created_at":{"description":"The date and time when the work item was created","label":"Created at","required":false,"type":{"kind":"instant"}},"system.creator":{"description":"The user that created the work item","label":"Creator","required":true,"type":{"kind":"user"}},"system.description":{"description":"A descriptive text of the work item","label":"Description","required":false,"type":{"kind":"markup"}},"system.iteration":{"description":"The iteration to which the work item belongs","label":"Iteration","required":false,"type":{"kind":"iteration"}},"system.order":{"description":"Execution Order of the workitem.","label":"Execution Order","required":false,"type":{"kind":"float"}},"system.remote_item_id":{"description":"The ID of the remote work item","label":"Remote item","required":false,"type":{"kind":"string"}},"system.state":{"description":"The state of the work item","label":"State","required":true,"type":{"baseType":"string","kind":"enum","values":["new","open","in progress","resolved","closed"]}},"system.title":{"description":"The title text of the work item","label":"Title","required":true,"type":{"kind":"string"}},"system.updated_at":{"description":"The date and time when the work item was last updated","label":"Updated at","required":false,"type":{"kind":"instant"}}},"icon":"fa fa-bookmark","name":"Userstory","updated-at":"2017-07-26T20:27:36.310986Z","version":0},"id":"ee7ca005-f81d-4eea-9b9b-1965df0988d1","type":"workitemtypes"}];
      return this.workItemTypes;
    }
  }

  public getWorkItemTypeById(id) {
    let allWorkItemTypes = this.getWorkItemTypes();
    let item = allWorkItemTypes.find((item) => item.id === id);
    return item ? item : allWorkItemTypes[0];
  }

  public renderText(text: string) {
    return {
        attributes: {
          renderedContent: 'MARKDOWN RENDERED: ' + text
        },
        id: 'd9da8f40-30cd-4fb3-afd0-ab3302fa694f',
        type: 'rendering'
    };
  }

}

