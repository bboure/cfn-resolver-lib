const ObjectNode = require('./ObjectNode');

class PropertyConditionNode extends ObjectNode {
    constructor(node, nodeAccessor, enableVerboseLogging) {
        super(node, nodeAccessor, enableVerboseLogging);
    }

    shouldReplaceParent(){
        return false;
    }
    
    evaulate(){
        let result = this.node;
        if(this.hasSingleDependency) {
            result = {};
            result[this.directDependencies[0].nodeAccessor.key] = this.directDependencies[0].evaulate();
        }

        super.log("Evalulated ConditionNode: " + this.node);
        super.log(result);
        return result;
    }
}

module.exports = PropertyConditionNode;