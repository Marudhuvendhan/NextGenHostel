import * as React from 'react'
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Badge,
  Drawer,
  Text,
  MD2Colors,
  useTheme,
  MD3Colors,
} from 'react-native-paper';

type Props = {
  collapsed: boolean;
};

const DrawerItemsData = [
  {
    label: 'Inbox',
    icon: 'inbox',
    key: 0,
    right: () => <Text variant="labelLarge">44</Text>,
  },
  {
    label: 'Starred',
    icon: 'star',
    key: 1,
    right: ({ color }: { color: string }) => (
      <Badge
        visible
        size={8}
        style={[styles.badge, { backgroundColor: color }]}
      />
    ),
  },
  { label: 'Sent mail', icon: 'send', key: 2 },
  { label: 'Colored label', icon: 'palette', key: 3 },
  {
    label: 'A very long title that will be truncated',
    icon: 'delete',
    key: 4,
    right: () => <Badge visible size={8} style={styles.badge} />,
  },
];


const Menu = ({
  collapsed,
}: Props) => {
  const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>(0);

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  const { colors, isV3 } = useTheme();

  const coloredLabelTheme = {
    colors: isV3
      ? {
          secondaryContainer: MD3Colors.tertiary80,
          onSecondaryContainer: MD3Colors.tertiary20,
        }
      : {
          primary: MD2Colors.tealA200,
        },
  };

  return (
    <DrawerContentScrollView
      alwaysBounceVertical={false}
      style={[
        styles.drawerContent,
        {
          backgroundColor: colors.primaryContainer,
        },
      ]}
    >
      {collapsed && (
          <Drawer.Section title="Example items">
            {DrawerItemsData.map((props, index) => (
              <Drawer.Item
                {...props}
                key={props.key}
                theme={props.key === 3 ? coloredLabelTheme : undefined}
                active={drawerItemIndex === index}
                onPress={() => _setDrawerItem(index)}
              />
            ))}
          </Drawer.Section>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  badge: {
    alignSelf: 'center',
  },
});

export default Menu;
