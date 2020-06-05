<template>
  <div v-if="!item.hidden">
    <template v-if="onlyOne">
      <app-link v-if="tempMenu.meta" :to="resolvePath(tempMenu.path)">
        <el-menu-item
          :index="resolvePath(tempMenu.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <item
            :icon="tempMenu.meta.icon||(item.meta&&item.meta.icon)"
            :title="tempMenu.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item";
import AppLink from "./Link";

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  computed: {
    onlyOne() {
      return (
        this.hasOneShowingChild(this.item.children, this.item) &&
        (!this.tempMenu.children || this.tempMenu.noShowingChildren) &&
        !this.item.alwaysShow
      );
    }
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      tempMenu: null
    };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.tempMenu = item;
          return true;
        }
      });
      // When there is only one child router and set onlyShowChildren true, the child router is displayed
      if (showingChildren.length === 1 && parent.onlyShowChildren) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.tempMenu = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
