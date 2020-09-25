const BASIS = require('../json/basis.json') // 基础装备
const SYNTHESIS = require('../json/synthesis.json') // 合成装备
const ALL = BASIS.concat(SYNTHESIS)


class Equipment {
    constructor(name, id, desc , src) {
      this.name = name
      this.id = id
      this.desc = desc
      this.src = src
    }
  }
  
  // 基础装备类
  class Basis extends Equipment {
    constructor(id) {
      const info = findEquipment(id)
      super(info.name, info.id, info.desc , info.src)
    }
    synthesisOne (id) { // 合成单个装备
      const equipment = findEquipment(id)
      return new Synthesis(synthesis(this.id, equipment.id).name)
    }
    synthesisAll () { // 单个装备能合成的对应装备
      const equipment = findEquipment(this.id)
      return BASIS.map(item => {
        return new Synthesis(synthesis(equipment.id, item.id).id)
      })
    }
  }


  // 合成装备类
class Synthesis extends Equipment {
  constructor(id) {
    const info = findEquipment(id)
    super(info.name, info.id, info.desc,info.src)
    this.way = info.way
  }

  decomposition () { // 装备分解
    return this.way.split('+').map(id => {
      return new Basis(id)
    })
  }
}

// 根据id查询某装备
function findEquipment(id){
    const result = ALL.find(item => {
        return item.id === id
    })
    if (result) {
        return result
    } else {
        throw '查找失败，装备不存在'
    }
}

// 根据编号合成装备
function synthesis (id1, id2) {
    const result = SYNTHESIS.find(item => {
        return item.way.includes(id1 + '+' + id2) || item.way.includes(id2 + '+' + id1)
    })
    if (result) {
        return result
    } else {
        console.log(id1, id2)
        throw '合成失败，不存在的合成路线'
    }
}

// 获取基本装备
function getBase () {
    return BASIS.map(item => {
        return new Basis(item.id)
    })
}
  
// 获取合成装备
function getSynthesis () {
    return SYNTHESIS.map(item => {
        return new Synthesis(item.id)
    })
}


export {
    getBase,
    getSynthesis
}